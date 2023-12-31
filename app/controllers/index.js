const {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
  passwordRecovery,
  contact,
  ticket,
} = require("./userController");
const {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("./productController");
const {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory,
  getCategoriesProduct,
} = require("./categoryController");
const {
  createSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesProduct,
} = require("./subCategoryController");
const {
  createImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  deleteImageProduct,
  getImageProductsProduct,
} = require("./imageProductController");
const {
  updatePrice,
  getDollar,
} = require("./dollarController")



const UserController = {
  createUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
  passwordRecovery,
  contact,
  ticket,
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
const SubCategoryController = {
  createSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  getSubCategoriesProduct,
};
const ImageProductController = {
  createImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  deleteImageProduct,
  getImageProductsProduct,
};
const DollarController = {
  updatePrice,
  getDollar,
}
module.exports = {
  UserController,
  CategoryController,
  ProductController,
  SubCategoryController,
  ImageProductController,
  DollarController,
};
