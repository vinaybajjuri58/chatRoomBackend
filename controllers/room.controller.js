const { Room } = require("../models/room.model");
const getAllRooms = async (req, res) => {
  try {
    const allRooms = await Room.find({});
    res.status(200).json({
      success: true,
      rooms: allRooms,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error in getting all rooms data",
      errMessage: err.errMessage,
    });
  }
};
const addNewRoom = async (req, res) => {
  const newRoomData = req.body;
  const newRoom = new Room(newRoomData);
  let savedNewRoom;
  try {
    savedNewRoom = await newRoom.save();
    res.status(201).json({
      success: true,
      message: "Added A new Room",
      room: savedNewRoom,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error occured in saving new Room",
      errMessage: err.errMessage,
    });
  }
};
module.exports = {
  getAllRooms,
  addNewRoom,
};
