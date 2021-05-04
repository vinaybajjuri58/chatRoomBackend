const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const socketio = require("socket.io");
require("dotenv").config();
const { roomRouter } = require("./routes/room.routes");
const { pathNotFound, errorHandler } = require("./middleware/errorHandlers");
const { initialiseDBConnection } = require("./db/db.connect");
const app = express();
app.use(cors());
app.use(express.json());
const server = createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/rooms", roomRouter);
const PORT = process.env.PORT || 3000;

// Socket Handlers
io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("join", (data, callback) => {
    console.log(`Data from client ${data}`);
    callback();
  });
});

app.use(pathNotFound);
app.use(errorHandler);
initialiseDBConnection();
server.listen(PORT, () => {
  console.log("Socket server started");
});
