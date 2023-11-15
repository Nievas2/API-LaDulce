const {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
} = require("./userProvider");
const {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} = require('./productProvider');
const {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoriesProduct,
} = require('./categoryProvider');
const {
  createSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
} = require('./SubCategoryProvider');
const {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct,
} = require("./imageproductprovider");


const UserProvider = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
const ProductProvider = {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
};
const CategoryProvider = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoriesProduct,
};
const SubCategoryProvider = {
  createSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
};
const ImageProductProvider = {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct,
};
module.exports = {
  UserProvider,
  CategoryProvider,
  ProductProvider,
  SubCategoryProvider,
  ImageProductProvider,
};
