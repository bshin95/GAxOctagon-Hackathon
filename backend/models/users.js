const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  event_id: { type: mongoose.Schema.Types.ObjectId, ref: "events" },
})

module.exports = User = mongoose.model("user", UserSchema)