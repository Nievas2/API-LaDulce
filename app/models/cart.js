"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      Cart.belongsTo(models.Product, {
        foreignKey: "ProductId",
      })
      Cart.belongsTo(models.User, {
        foreignKey: "userId",
      })
    }
  }
  Cart.init(
    {
      ProductId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  )
  return Cart
}
