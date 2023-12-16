const { SubCategoryProvider } = require('../providers');

const getSubCategories = () => SubCategoryProvider.getSubCategories();

const getSubCategory = (id) => SubCategoryProvider.getSubCategoryById(id);

const createSubCategory = (options) => SubCategoryProvider.createSubCategory(options);

const updateSubCategory = (id, options) => SubCategoryProvider.updateSubCategory(id, options);

const deleteSubCategory = (id) => SubCategoryProvider.deleteSubCategory(id);

const getSubCategoriesProduct = (SubCategoryName) => SubCategoryProvider.getSubCategoriesProduct(SubCategoryName);

// exports
module.exports = {
  createSubCategory, deleteSubCategory, getSubCategory, getSubCategories, updateSubCategory, getSubCategoriesProduct,
};
