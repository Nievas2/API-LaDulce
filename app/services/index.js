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
  deleteAdmins
} = require("./userService")
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getProductByName
} = require("./productService")
const {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesProduct
} = require("./categoryService")
const {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct
} = require("./subCategoryService")
const {
  createImageProduct,
  deleteImageProduct,
  getImageProduct,
  getImageProducts,
  updateImageProduct,
  getImageProductsProduct
} = require("./imageProductService")
const { updatePrice, getDollar } = require("./dollarService")
const { createImage } = require("./imageService")

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
  deleteAdmins
}
const ProductService = {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  getProductByName
}
const CategoryService = {
  createCategory,
  deleteCategory,
  getCategory,
  getCategories,
  updateCategory,
  getCategoriesProduct
}
const SubCategoryService = {
  createSubCategory,
  deleteSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  getSubCategoriesProduct
}
const ImageProductService = {
  createImageProduct,
  deleteImageProduct,
  getImageProduct,
  getImageProducts,
  updateImageProduct,
  getImageProductsProduct
}
const DollarService = {
  updatePrice,
  getDollar
}
const ImageService = {
  createImage
}

module.exports = {
  UserService,
  ProductService,
  CategoryService,
  SubCategoryService,
  ImageProductService,
  DollarService,
  ImageService
}
