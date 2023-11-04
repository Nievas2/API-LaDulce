const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { upload, getImages,getImage2 } = require('../controllers/carouselController');

router.post('/upload', upload);

router.get('/images/:imageName', getImage2)
router.get("", getImages)
  module.exports = router;