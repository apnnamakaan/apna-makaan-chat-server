const express = require('express')
const router = express.Router();

const messageService = require('./../services/messageService')

//Get message by room_id
router.get("/:room", (req, res) => { messageService.getMessages(req, res) });

//Send new message
router.post("/send", (req, res) => { messageService.sendMessage(req, res) })



module.exports = router;