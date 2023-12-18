const express = require('express');

const router = express.Router();
const { body } = require('express-validator');
const { CategoryController } = require('../controllers');
const { authMW, adminCheck } = require('../middleware/authentication.middleware');

router.get('/', CategoryController.getCategories);
router.get('/:CategoryId', CategoryController.getCategoryById);
router.get('/product/:CategoryName', CategoryController.getCategoriesProduct);
router.post('/',authMW, adminCheck, body('name').isString(),body('image').isString(), /* authMW, adminCheck, */ CategoryController.createCategory);

router.put(
  '/:CategoryId',
  body('name').isString(),
  body('image').isString(),
  authMW, adminCheck,
  CategoryController.updateCategory,
);

router.delete('/:CategoryId', authMW, adminCheck, CategoryController.deleteCategory);

module.exports = router;
