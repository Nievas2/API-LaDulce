const { Product, ImageProduct, ImagesProductAsocciation } = require("../models")

const createImageProduct = async (image) => {
  console.log(image)
  const productSelect = await Product.findOne({
    where: { id: image.idProduct }
  })
  const newImageProduct = await ImageProduct.create({
    image: image.response
  })

  //crea la relacion de las tablas
  const relation = await ImagesProductAsocciation.create({
    ImageProductId: newImageProduct.id,
    ProductId: productSelect.id
  })
  return relation
}
const getImageProductsProduct = async (imageProductName) => {
  const imageProducts = await ImageProduct.findOne({
    where: { name: imageProductName },
    include: [
      {
        model: Product
      }
    ]
  })
  return imageProducts
}
const getImageProducts = async () => {
  const imageProducts = await ImageProduct.findAll()
  return imageProducts
}

const getImageProductById = async (id) => {
  const imageProduct = await ImageProduct.findByPk(id)
  return imageProduct
}
const getImageProductByName = async (nameSelect) => {
  const imageProduct = await ImageProduct.findOne({
    where: { name: nameSelect }
  })
  return imageProduct
}
const updateImageProduct = async (ImageProductId) => {
  console.log(ImageProductId)
  const imageProduct = await ImageProduct.update({
    image: ImageProductId.response
  }, {
    where: { id: ImageProductId.idProduct }
  })
  console.log(imageProduct);
  
  return imageProduct
}

const deleteImageProduct = async (ImageProductId) => {
  ImageProduct.destroy({ where: { id: ImageProductId } })
}

module.exports = {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct
}
