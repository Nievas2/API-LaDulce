const {
  Product,
  Category,
  SubCategoryProduct,
  ImageProduct,
  SubCategory
} = require("../models");
const CategoryProvider = require("./categoryProvider");

const createProduct = async (ProductOptions) => {
  try {
    //obtiene el objeto
    const getObjetCategory = await CategoryProvider.getCategoryByName(
      ProductOptions.CategoryName
    );

    const newProduct = await Product.create({
      name: ProductOptions.name,
      image: ProductOptions.image,
      description: ProductOptions.description,
      price: ProductOptions.price,
      CategoryId: getObjetCategory.dataValues.id,
    });
    return newProduct;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const productSelect = await Product.findOne({
      where: { id: productId },
      include: [
        {
          model: Category,
          
        },
      ],
    });
    return productSelect;

  } catch (error) {
    throw error;
  }
};

const getProducts = async () => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          model: SubCategoryProduct,
          include: [SubCategory],
          /* model: ImageProduct, */
        },
      ],
    });

    return products;

  } catch (error) {
    throw error;
  }
};

const updateProduct = async (ProductId, ProductOptions) => {
  try {
    const category = await CategoryProvider.getCategoryByName(ProductOptions.CategoryName)
    await getProductById(ProductId);
    await Product.update(
      {
        name:ProductOptions.name,
        description:ProductOptions.description,
        price:ProductOptions.price,
        image:ProductOptions.image,
        CategoryId: category.dataValues.id
    
    }, { where: { id: ProductId } });
    return Product.findByPk(ProductId);
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (ProductId) => {
  try {
    const select =await Product.destroy(
      { where: { id: ProductId } }
    );
    return select
  } catch (error) {
    throw error;
  }
};

//exports
module.exports = {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
};
