const { ProductProvider } = require("../providers")

const getProduct = async (id) => {
  return await ProductProvider.getProductById(id)
}

const getProductByName = async (name) => {
  return await ProductProvider.getProductByName(name)
}

const getProducts = async (page, query, categoryId) => {
  return await ProductProvider.getProducts(page, query, categoryId)
}

const createCategory = async (options) => {
  return await ProductProvider.createProduct(options)
}

const createProduct = async (options) => {
  return await ProductProvider.createProduct(options)
}

const updateProduct = async (id, options) => {
  return await ProductProvider.updateProduct(id, options)
}

const deleteProduct = async (id) => {
  return await ProductProvider.deleteProduct(id)
}

//exports
module.exports = {
  createProduct,
  createCategory,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getProductByName
}
