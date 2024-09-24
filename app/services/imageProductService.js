const { ImageProductProvider } = require("../providers")

const getImageProducts = () => ImageProductProvider.getImageProducts()

const getImageProduct = (id) => ImageProductProvider.getImageProductById(id)

const createImageProduct = (image, idProduct) => {
  ImageProductProvider.createImageProduct(image, idProduct)
}
const updateImageProduct = (id, options) => {
  ImageProductProvider.updateImageProduct(id, options)
}
const deleteImageProduct = (id) => ImageProductProvider.deleteImageProduct(id)

const getImageProductsProduct = (ImageProductName) => {
  ImageProductProvider.getImageProductsProduct(ImageProductName)
}
// exports
module.exports = {
  createImageProduct,
  deleteImageProduct,
  getImageProduct,
  getImageProducts,
  updateImageProduct,
  getImageProductsProduct
}
