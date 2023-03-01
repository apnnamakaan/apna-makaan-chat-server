let mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    room:{ type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    message: { type: String, required: true },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Message', messageSchema)