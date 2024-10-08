"use strict"
const { Model } = require("sequelize")
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
      Product.belongsTo(models.Category)
      models.Category.hasMany(Product, {
        foreignKey: "CategoryId"
      })
      /*  */

      /*  */
      Product.hasMany(models.SubCategoryProduct, {
        foreignKey: "ProductId"
      })
      /*  */
      Product.hasMany(models.ImagesProductAsocciation, {
        foreignKey: "ProductId"
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      image: { type: DataTypes.STRING, defaultValue: "" }
    },
    {
      sequelize,
      modelName: "Product"
    }
  )
  return Product
}
