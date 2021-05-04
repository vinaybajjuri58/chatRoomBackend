const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please add a room name",
  },
});
const Room = mongoose.model("Room", roomSchema);
module.exports = { Room };
