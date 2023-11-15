const { Product, ImageProduct } = require("../models");

const createImageProduct = async (options) => {
  const newImageProduct = await ImageProduct.create(options);
  return newImageProduct;
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
  const imageProduct = await ImageProduct.findByPk(id, {
    include: [
      {
        model: Product,
      },
    ],
  });
  return imageProduct;
};
const getImageProductByName = async (nameSelect) => {
  const imageProduct = await ImageProduct.findOne({ where: { name: nameSelect } },{
    include: [
      {
        model: Product,
      },
    ],
  });
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
