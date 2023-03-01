const Message = require('../models/message');
const Room = require('../models/room');


async function sendMessage(req, res) {
    const message = new Message(req.body);
    const savedMessage = message.save().catch(err => {
        res.statusCode = 500,
            res.send({ status: 'false', message: err.message });
        return;
    });

    const room = req.body.room;

    await Room.findByIdAndUpdate(room, { updatedAt: new Date, active: true })

    if (savedMessage) {
        res.statusCode = 200;
        res.send({ status: "true", message: "message send successfully" });
    }

}

async function getMessages(req, res) {

    var room = req.params.room;

    var messages = await Message.find({ room: room }).exec().catch(err => {
        res.statusCode = 500;
        res.send({ status: 'false', message: err.message });
        return;
    });

    res.statusCode = 200;
    res.send(messages);
}






module.exports = { sendMessage, getMessages }