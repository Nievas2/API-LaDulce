const { validationResult } = require("express-validator")
const { ProductService } = require("../services")

const createProduct = async (req, res) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array()
    })
  }
  const { name, description, price, CategoryName } = req.body

  try {
    const newProduct = await ProductService.createProduct({
      name,
      description,
      price,
      CategoryName
    })

    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const getProductById = async (req, res) => {
  const { ProductId } = req.params
  try {
    const Product = await ProductService.getProduct(ProductId)
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const getProducts = async (req, res) => {
  let { page } = req.params
  let { query, categoryId } = req.query
  if (!page) page = 1
  if (!query) query = ""
  if (!categoryId) categoryId = ""
  try {
    const Product = await ProductService.getProducts(page, query, categoryId)
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateProduct = async (req, res) => {
  const result = validationResult(req)
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array()
    })
  }
  const { ProductId } = req.params
  const { name, description, price, CategoryName } = req.body
  try {
    const newProduct = await ProductService.updateProduct(ProductId, {
      name,
      description,
      price,
      CategoryName
    })
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteProduct = async (req, res) => {
  const { ProductId } = req.params
  try {
    const Product = await ProductService.deleteProduct(ProductId)
    res.status(200).json(Product)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct
}
