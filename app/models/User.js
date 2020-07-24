const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  interestOne: {
    type: String,
    required: false,
  },
  interestTwo: {
    type: String,
    required: false,
  },
  interestThree: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model("User", UserSchema)
