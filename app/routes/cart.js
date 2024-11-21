const express = require("express")
const router = express.Router()
const { CartController } = require("../controllers")

router.get("/get", CartController.getCart)
router.post("/add", CartController.createCart)
router.put("/updateMount", CartController.updateMountCart)
module.exports = router
