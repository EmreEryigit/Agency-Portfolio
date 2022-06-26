const express = require("express")
const router = express.Router()
const projectController = require("../controllers/projectController")

router.route("/").post(projectController.createProject)
router.route("/:id").delete(projectController.deleteProject).put(projectController.updateProject)
module.exports = router