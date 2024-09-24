const { validationResult } = require("express-validator")
const cloudinary = require("cloudinary").v2
const { CategoryService } = require("../services")
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})
const getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getCategories()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const createCategory = async (req, res) => {
  const resultValidate = validationResult(req)
  if (!resultValidate.isEmpty()) {
    return res.status(400).send({
      errors: resultValidate.array()
    })
  }
  const { name, image } = req.body
  try {
    const response = await CategoryService.createCategory({
      name,
      image
    })
    res.status(200).json(response)
  } catch (error) {
    throw error
  }
}

const getCategoryById = async (req, res) => {
  const categoryId = req.params.CategoryId
  try {
    const category = await CategoryService.getCategory(categoryId)
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const updateCategory = async (req, res) => {
  const resultValidate = validationResult(req)
  if (!resultValidate.isEmpty()) {
    return res.status(400).send({ errors: resultValidate.array() })
  }
  const categoryId = req.params.CategoryId
  const { name, image } = req.body
  try {
    const response = await CategoryService.updateCategory(categoryId, {
      name,
      image
    })
    return res.status(200).json(response)
  } catch (error) {
    throw error
  }
}

const deleteCategory = async (req, res) => {
  const categoryId = req.params.CategoryId
  try {
    const category = await CategoryService.deleteCategory(categoryId)
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const getCategoriesProduct = async (req, res) => {
  const { CategoryName } = req.params
  try {
    const category = await CategoryService.getCategoriesProduct(CategoryName)
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
module.exports = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoriesProduct
}
