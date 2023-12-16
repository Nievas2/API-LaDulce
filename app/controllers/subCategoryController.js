const { validationResult } = require('express-validator');
const { SubCategoryService } = require('../services');

const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategoryService.getSubCategories();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createSubCategory = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const { date, Product, price } = req.body;
  try {
    const newSubCategory = await SubCategoryService.createSubCategory({
      date, 
      Product, 
      price,
    });

    return res.status(201).json(newSubCategory);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getSubCategoryById = async (req, res) => {
  const subCategoryId = req.params.SubCategoryId;
  try {
    const subCategory = await SubCategoryService.getSubCategory(subCategoryId);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateSubCategory = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  const subCategoryId = req.params.SubCategoryId;
  const { date, price } = req.body;
  try {
    const newSubCategory = await SubCategoryService.updateSubCategory(subCategoryId, {
      date,
      price,
    });
    return res.status(200).json(newSubCategory);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteSubCategory = async (req, res) => {
  const subCategoryId = req.params.SubCategoryId;
  try {
    const subCategory = await SubCategoryService.deleteSubCategory(subCategoryId);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getSubCategoriesProduct = async (req, res) => {
  const { SubCategoryName } = req.params;
  try {
    const subCategory = await SubCategoryService.getSubCategoriesProduct(SubCategoryName);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesProduct,
};
