const { ProductService } = require("../services");
const { validationResult } = require("express-validator");

const createProduct = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const {
    name,
    image,
    description,
    price,
    CategoryName,
  } = req.body;

  try {
    const newProduct = await ProductService.createProduct({
      name,
      image,
      description,
      price,
      CategoryName,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};
const getProductById = async (req, res) => {
  const ProductId = req.params.ProductId;
  try {
    const Product = await ProductService.getProduct(ProductId);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const Product = await ProductService.getProducts();
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const updateProduct = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ 
      errors: result.array() 
    });
  }
  const ProductId = req.params.ProductId;
  const {
    name,
    image,
    description,
    price,
    CategoryName,
  } = req.body;
  try {
    const newProduct = await ProductService.updateProduct(ProductId, {
      name,
      image,
      description,
      price,
      CategoryName,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

const deleteProduct = async (req, res) => {
  const ProductId = req.params.ProductId;
  try {
    const Product = await ProductService.deleteProduct(ProductId);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ 
      message: error.message 
    });
  }
};

module.exports = {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
};
