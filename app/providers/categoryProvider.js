const { Product, Category } = require("../models");

const createCategory = async (options) => {
  const newCategory = await Category.create(options);
  return newCategory;
};
const getCategoriesProduct = async (categoryName) => {
  const categories = await Category.findOne({
    where: { name: categoryName },
    include: [
      {
        model: Product,
      },
    ],
  });
  return categories;
};
const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id, {
    include: [
      {
        model: Product,
      },
    ],
  });
  return category;
};
const getCategoryByName = async (nameSelect) => {
  const category = await Category.findOne({ where: { name: nameSelect } },{
    include: [
      {
        model: Product,
      },
    ],
  });
  return category;
};
const updateCategory = async (CategoryId, CategoryOptions) => {
  await getCategoryById(CategoryId);
  await Category.update(CategoryOptions, { where: { id: CategoryId } });
  return Category.findByPk(CategoryId);
};

const deleteCategory = async (CategoryId) =>
  Category.destroy({ where: { id: CategoryId } });

module.exports = {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  getCategoryByName,
  getCategoriesProduct,
};
