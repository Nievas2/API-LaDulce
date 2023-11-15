const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { ImageProductController } = require('../controllers');

router.get('/', ImageProductController.getImageProducts);
router.get('/:ImageProductId', ImageProductController.getImageProductById);
router.get('/product/:ImageProductName', ImageProductController.getImageProductsProduct);
router.post('/', body('image').isString(),body('Product').isInt(),ImageProductController.createImageProduct);

router.put(
  '/:ImageProductId',
  body('image').isString(),
  ImageProductController.updateImageProduct,
);

router.delete('/:ImageProductId',ImageProductController.deleteImageProduct);

module.exports = router;
