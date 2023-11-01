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
module.exports = {
  UserProvider,
  CategoryProvider,
  ProductProvider,
};
