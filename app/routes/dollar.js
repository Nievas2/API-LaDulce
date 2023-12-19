const express = require("express");

const router = express.Router();
const { body } = require("express-validator");
const { DollarController } = require("../controllers");
const {
  authMW,
  adminCheck,
} = require("../middleware/authentication.middleware");
router.put(
  "/update",
  authMW,
  adminCheck,
  body("price").isString(),
  DollarController.updatePrice
);
router.get("", DollarController.getDollar)
module.exports = router;
