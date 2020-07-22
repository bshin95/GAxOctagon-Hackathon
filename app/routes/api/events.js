const express = require("express")
// const router = express.Router()
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const keys = require("../../config/keys")
// const passport = require("passport")

const Event = require("../../models/Event")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
    return res.status(200).json({ events })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllEvents,
}
