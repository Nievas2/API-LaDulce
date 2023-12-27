const express = require("express");

const router = express.Router();
const { body } = require("express-validator");
const { DollarController } = require("../controllers");
const {
  authMW,
  adminCheck,
} = require("../middleware/authentication.middleware");
router.put(
  "/update/:id",
  authMW,
  adminCheck,
  body("price").isInt(),
  DollarController.updatePrice
);
router.get("", DollarController.getDollar)
module.exports = router;
