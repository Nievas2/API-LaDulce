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
} = require('./userService');
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require('./productService');
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesProduct,
} = require('./categoryService');
const UserService = {
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
module.exports = {
   UserService,
  ProductService,
CategoryService, }
