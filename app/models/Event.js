const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
})

module.exports = mongoose.model("Event", EventSchema)
