const express = require("express");

const router = express.Router();
const { body } = require("express-validator");
const { authMW, adminCheck } = require('../middleware/authentication.middleware');

const {
  upload,
  getImages,
  getImage2,
  deleteCarousel,
} = require("../controllers/carouselController");

router.delete("/image/delete/:imageName",authMW, adminCheck, deleteCarousel);
router.post("/upload",authMW, adminCheck, upload);

router.get("/images/:imageName", getImage2);
router.get("", getImages);
module.exports = router;
