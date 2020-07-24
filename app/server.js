const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const events = require("./routes/api/events")
const users = require("./routes/api/users")
const logger = require('morgan')


const app = express()

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())
app.use(logger('dev'))

// DB Config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err))

// Passport middleware
app.use(passport.initialize())

// Passport config
// require("./config/passport")(passport)

// Routes
app.use("/api/users", users)
app.use("/api", events)

const port = process.env.port || 3001

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
