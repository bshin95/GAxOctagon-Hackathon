const { Router } = require("express")
const controllers = require("../../controllers")
//const restrict = require("../helpers/index")

const router = Router()

router.get("/", controllers.getEvents)
router.get("/:id", controllers.getEvent)
router.post("/events", controllers.createEvent)
/*router.put("/events/:id", restrict, controllers.updateEvent)
router.delete("/events/:id", restrict, controllers.deleteEvent)*/

module.exports = router
