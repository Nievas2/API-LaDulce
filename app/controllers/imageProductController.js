const { validationResult } = require('express-validator');
const { ImageProductService } = require('../services');

const getImageProducts = async (req, res) => {
  try {
    const ImageProducts = await ImageProductService.getImageProducts();
    res.status(200).json(ImageProducts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const createImageProduct = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const { image, Product } = req.body;
  try {
    const newImageProduct = await ImageProductService.createImageProduct({
      image,
      Product,
    });

    return res.status(201).json(newImageProduct);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getImageProductById = async (req, res) => {
  const imageProductId = req.params.ImageProductId;
  try {
    const imageProduct = await ImageProductService.getImageProduct(imageProductId);
    res.status(200).json(imageProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateImageProduct = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  const imageProductId = req.params.ImageProductId;
  const { image } = req.body;
  try {
    const newImageProduct = await ImageProductService.updateImageProduct(imageProductId, {
      image,
    });
    return res.status(200).json(newImageProduct);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteImageProduct = async (req, res) => {
  const imageProductId = req.params.ImageProductId;
  try {
    const imageProduct = await ImageProductService.deleteImageProduct(imageProductId);
    res.status(200).json(imageProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getImageProductsProduct = async (req, res) => {
  const { ImageProductName } = req.params;
  try {
    const imageProduct = await ImageProductService.getImageProductsProduct(ImageProductName);
    res.status(200).json(imageProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  deleteImageProduct,
  getImageProductsProduct,
};
