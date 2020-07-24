const db = require("../db")
const Event = require("../models/Event")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const events = [
    {
      name: "Mets VS. Yankees",
      venue: "Citi Field",
      location: "New York City, NY",
      time: "12:00 PM PST",
      price: "$300.00",
      date: "April 23, 2022",
      purchased: "StubHub",
    },
    {
      name: "Bad Bunny",
      venue: "Madison Square Garden",
      location: "New York City, NY",
      time: "12:00 PM PST",
      price: "$40.00",
      date: "April 23, 2022",
      purchased: "TicketMaster",
    },
    {
      name: "Brooklyn Symphony",
      venue: "Barclays Center",
      location: "Brooklyn, NY",
      time: "12:00 PM PST",
      price: "$300.00",
      date: "April 23, 2022",
      purchased: "SeatGeek",
    },
    {
      name: "Baila",
      venue: "Barclays Center",
      location: "Brookyln, NY",
      time: "12:00 PM PST",
      price: "$300.00",
      date: "April 27, 2022",
      purchased: "TicketMaster",
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
