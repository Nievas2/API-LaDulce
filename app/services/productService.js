const {ProductProvider} = require("../providers");

const getProduct= async (id) => {
  return await ProductProvider.getProductById(id);
};

const getProducts = async () => {
  return await ProductProvider.getProducts();
};

const createCategory = async (options) => {
    return await ProductProvider.createProduct(options);
  };

const createProduct = async (options) => {
  return await ProductProvider.createProduct(options);
};

const updateProduct = async (id, options) => {
  return await ProductProvider.updateProduct(id, options);
};

const deleteProduct = async (id) => {
  return await ProductProvider.deleteProduct(id);
};

//exports
module.exports = { createProduct, createCategory ,deleteProduct, getProduct, getProducts, updateProduct };
