const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { SubCategoryController } = require('../controllers');

router.get('/', SubCategoryController.getSubCategories);
router.get('/:SubCategoryId', SubCategoryController.getSubCategoryById);
router.get('/product/:SubCategoryName', SubCategoryController.getSubCategoriesProduct);
router.post('/', body('date').isString(), body('Product').isInt(),SubCategoryController.createSubCategory);

router.put(
  '/:SubCategoryId',
  body('date').isString(),
  SubCategoryController.updateSubCategory,
);

router.delete('/:SubCategoryId', SubCategoryController.deleteSubCategory);

module.exports = router;
