const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { SubCategoryController } = require('../controllers');
const { authMW, adminCheck } = require('../middleware/authentication.middleware');

router.get('/', SubCategoryController.getSubCategories);
router.get('/:SubCategoryId', SubCategoryController.getSubCategoryById);
router.get('/product/:SubCategoryName', SubCategoryController.getSubCategoriesProduct);
router.post('/',authMW, adminCheck, body('date').isString(), body('Product').isInt(),SubCategoryController.createSubCategory);

router.put(
  '/edit/:SubCategoryId',
  body('date').isString(),
  authMW, adminCheck,
  SubCategoryController.updateSubCategory,
);

router.delete('/:SubCategoryId', authMW, adminCheck,SubCategoryController.deleteSubCategory);

module.exports = router;
