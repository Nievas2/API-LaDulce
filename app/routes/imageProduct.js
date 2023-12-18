const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { ImageProductController } = require('../controllers');
const { authMW, adminCheck } = require('../middleware/authentication.middleware');

router.get('/', ImageProductController.getImageProducts);
router.get('/:ImageProductId', ImageProductController.getImageProductById);
router.get('/product/:ImageProductName', ImageProductController.getImageProductsProduct);
router.post('/', authMW, adminCheck, body('image').isString(),body('Product').isInt(),ImageProductController.createImageProduct);

router.put(
  '/:ImageProductId',
  body('image').isString(),
  authMW, adminCheck,
  ImageProductController.updateImageProduct,
);

router.delete('/:ImageProductId',authMW, adminCheck,ImageProductController.deleteImageProduct);

module.exports = router;
