const {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
  inscription,
  removeProductRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
} = require("./userController");
const {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('./productController');
const {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoriesProduct,
} = require('./categoryController');
const UserController = {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
  inscription,
  removeProductRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
const ProductController = {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
};

const CategoryController = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoriesProduct,
};
module.exports = {
  UserController,
  CategoryController,
  ProductController
};
