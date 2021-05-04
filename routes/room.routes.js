const express = require("express");
const roomRouter = express.Router();
const { addNewRoom, getAllRooms } = require("../controllers/room.controller");
roomRouter.route("/").get(getAllRooms).post(addNewRoom);
module.exports = { roomRouter };
