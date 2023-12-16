const { Product, ImageProduct, ImagesProductAsocciation } = require("../models");

const createImageProduct = async (options) => {
  const productSelect = await Product.findOne({
    where: { id: options.Product},
  });
  const newImageProduct = await ImageProduct.create(options);

   
  //crea la relacion de las tablas
  const relation = await ImagesProductAsocciation.create({
    ImageProductId: newImageProduct.id,
    ProductId: productSelect.id,
  });
  return relation;
};
const getImageProductsProduct = async (imageProductName) => {
  const imageProducts = await ImageProduct.findOne({
    where: { name: imageProductName },
    include: [
      {
        model: Product,
      },
    ],
  });
  return imageProducts;
};
const getImageProducts = async () => {
  const imageProducts = await ImageProduct.findAll();
  return imageProducts;
};

const getImageProductById = async (id) => {
  const imageProduct = await ImageProduct.findByPk(id);
  return imageProduct;
};
const getImageProductByName = async (nameSelect) => {
  const imageProduct = await ImageProduct.findOne({ where: { name: nameSelect } });
  return imageProduct;
};
const updateImageProduct = async (ImageProductId, ImageProductOptions) => {
  await getImageProductById(ImageProductId);
  await ImageProduct.update(ImageProductOptions, { where: { id: ImageProductId } });
  return ImageProduct.findByPk(ImageProductId);
};

const deleteImageProduct = async (ImageProductId) =>
  ImageProduct.destroy({ where: { id: ImageProductId } });

module.exports = {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct,
};
