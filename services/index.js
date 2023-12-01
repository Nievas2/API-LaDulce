const {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchPassword,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
} = require("./userService");
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require("./productService");
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesProduct,
} = require("./categoryService");
const {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
} = require("./subCategoryService");
const {
  createImageProduct,
  deleteImageProduct,
  getImageProduct,
  getImageProducts,
  updateImageProduct,
  getImageProductsProduct,
} = require("./imageProductService");

const UserService = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchPassword,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
const ProductService = {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
};
const CategoryService = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesProduct,
};
const SubCategoryService = {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
};
const ImageProductService = {
  createImageProduct,
  deleteImageProduct,
  getImageProduct,
  getImageProducts,
  updateImageProduct,
  getImageProductsProduct,
};
module.exports = {
  UserService,
  ProductService,
  CategoryService,
  SubCategoryService,
  ImageProductService,
};
