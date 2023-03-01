const express = require("express");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const cors = require("cors");
const app = express();
const http = require('http');
const server = http.createServer(app);


const io = new Server(server);


require("dotenv").config();

const PORT = parseInt(process.env.PORT);
const MONGO_URL = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL);

app.use(express.json());
app.use(cors());

app.use("/message", require("./routes/messageRoute"));
app.use("/room", require("./routes/roomRoute"));

server.listen(PORT, () => console.warn(`Running on http://127.0.0.1:${PORT}`));
