const { Product, SubCategory, SubCategoryProduct } = require("../models");

const createSubCategory = async (options) => {
  const productSelect = await Product.findOne({
    where: { id: options.Product},
  });

 /*  if (checkExist)throw new Error("Schedule already exists");
  const productSelect = await Product.findOne({
    where: { id: options.course },
  });
  if (!productSelect) {
    throw new Error("no get Product found");
  } */

  const newSubCategory = await SubCategory.create(options);

  
  //crea la relacion de las tablas
  const relation = await SubCategoryProduct.create({
    SubCategoryId: newSubCategory.id,
    ProductId: productSelect.id,
  });



  return newSubCategory;
};
const getSubCategoriesProduct = async (subCategoryName) => {
  const subCategories = await SubCategory.findOne({
    where: { name: subCategoryName },
    include: [
      {
        model: Product,
      },
    ],
  });
  return subCategories;
};
const getSubCategories = async () => {
  const subCategories = await SubCategory.findAll();
  return subCategories;
};

const getSubCategoryById = async (id) => {
  const subCategory = await SubCategory.findByPk(id);
  return subCategory;
};
const getSubCategoryByName = async (nameSelect) => {
  const subCategory = await SubCategory.findOne({ where: { name: nameSelect } },{
    include: [
      {
        model: Product,
      },
    ],
  });
  return subCategory;
};
const updateSubCategory = async (SubCategoryId, SubCategoryOptions) => {
  await getSubCategoryById(SubCategoryId);
  const update = await SubCategory.update(SubCategoryOptions, { where: { id: SubCategoryId } });
  return update
};

const deleteSubCategory = async (SubCategoryId) =>
  SubCategory.destroy({ where: { id: SubCategoryId } });

module.exports = {
  createSubCategory,
  deleteSubCategory,
  getSubCategoryById,
  getSubCategories,
  updateSubCategory,
  getSubCategoryByName,
  getSubCategoriesProduct,
};
