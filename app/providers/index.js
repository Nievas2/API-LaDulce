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
  passwordRecovery
} = require("./userProvider")
const {
  createProduct,
  checkTicket,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductByName,
} = require("./productProvider")
const {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoriesProduct,
} = require("./categoryProvider")
const {
  createSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
} = require("./subcategoryprovider")
const {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct,
} = require("./imageproductprovider")
const { updatePrice, getDollar } = require("./dollarProvider")
const { createimage } = require("./imageProvider")
const { createCart, getCart, updateMountCart } = require("./cartProvider")

const UserProvider = {
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
  passwordRecovery,
}
const ProductProvider = {
  createProduct,
  checkTicket,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductByName,
}
const CategoryProvider = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoriesProduct,
}
const SubCategoryProvider = {
  createSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct,
}
const ImageProductProvider = {
  createImageProduct,
  deleteImageProduct,
  getImageProductById,
  getImageProducts,
  updateImageProduct,
  getImageProductByName,
  getImageProductsProduct,
}
const DollarProvider = {
  updatePrice,
  getDollar,
}
const ImageProvider = {
  createimage,
}
const CartProvider = {
  createCart, getCart, updateMountCart
}

module.exports = {
  UserProvider,
  CategoryProvider,
  ProductProvider,
  SubCategoryProvider,
  ImageProductProvider,
  DollarProvider,
  ImageProvider,
  CartProvider,
}
