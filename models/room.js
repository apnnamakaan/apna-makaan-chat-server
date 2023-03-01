let mongoose = require('mongoose');

let roomSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    property_id: { type: Number, required: true },
    property_image: { type: String, required: true },
    seller: { type: String, required: true },
    buyer: { type: String, required: true },
    active: { type: Boolean, default:false },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Room', roomSchema)