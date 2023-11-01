const { CategoryProvider } = require('../providers');

const getCategories = () => CategoryProvider.getCategories();

const getCategory = (id) => CategoryProvider.getCategoryById(id);

const createCategory = (options) => CategoryProvider.createCategory(options);

const updateCategory = (id, options) => CategoryProvider.updateCategory(id, options);

const deleteCategory = (id) => CategoryProvider.deleteCategory(id);

const getCategoriesProduct = (CategoryName) => CategoryProvider.getCategoriesProduct(CategoryName);

// exports
module.exports = {
  createCategory, deleteCategory, getCategory, getCategories, updateCategory, getCategoriesProduct,
};
