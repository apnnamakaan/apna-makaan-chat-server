const Room = require('../models/room');

async function createRoom(req, res) {
    const room = new Room(req.body);

    const searchRoom = await Room.findOne({
        property_id: req.body.property_id,
        seller: req.body.seller,
        buyer: req.body.buyer

    }).exec().catch(err => {
        res.statusCode = 500;
        res.send({ status: 'false', message: err.message });
        return;
    });


    if (searchRoom) {
        res.send({ room: searchRoom._id });
        return;
    }

    const savedRoom = await room.save().catch(err => {
        res.statusCode = 500,
            res.send({ status: 'false', message: err.message });
        return;
    });


    if (savedRoom) {
        res.statusCode = 201;
        res.send({ room: savedRoom._id });
    }

}

async function getRooms(req, res) {

    var email = req.params.email;

    var rooms = await Room.find({ $or: [{ seller: email }, { buyer: email }]  }).exec().catch(err => {
        res.statusCode = 500;
        res.send({ status: 'false', message: err.message });
        return;
    });

    res.statusCode = 200;
    res.send(rooms);

}

module.exports = { createRoom, getRooms };