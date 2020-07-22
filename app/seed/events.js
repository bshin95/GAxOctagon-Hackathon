const db = require("../db")
const Event = require("../models/Event")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const events = [
    {
      name: "Coachella",
      venue: "Coachella Valley",
      location: "California",
      time: "12:00 PM PST",
      price: "$300.00",
      date: "April 28th - April 30th",
    },
  ]

  await Event.insertMany(events)
  console.log("Created Events")
}

const run = async () => {
  await main()
  db.close()
}

run()
