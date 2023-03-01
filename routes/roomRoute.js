const express = require('express')
const router = express.Router();
const roomService = require('./../services/roomService')

//Get room by email
router.get("/:email", (req, res) => { roomService.getRooms(req, res) });

//Create new room
router.post("/create", (req, res) => { roomService.createRoom(req, res) })


module.exports = router;