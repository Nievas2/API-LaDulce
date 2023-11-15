'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /*  */
      Product.belongsTo(models.Category);
      models.Category.hasMany(Product, {
        foreignKey: 'CategoryId',
      });
      /*  */
      Product.hasMany(models.ImageProduct);
      models.ImageProduct.belongsTo(Product, {
        foreignKey: 'ImageProductId',
      });
      /*  */
      Product.hasMany(models.SubCategory);
      models.SubCategory.belongsTo(Product, {
        foreignKey: 'SubCategoryId',
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};