'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubCategoryProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubCategoryProduct.belongsTo(models.Product, {
        foreignKey: "id",
        target_key: "ProductId",
      });
      SubCategoryProduct.belongsTo(models.SubCategory, {
        foreignKey: "id",
        target_key: "SubCategoryId",
      });
    }
  }
  SubCategoryProduct.init({
    ProductId: DataTypes.INTEGER,
    SubCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SubCategoryProduct',
  });
  return SubCategoryProduct;
};