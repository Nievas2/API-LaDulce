'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagesProductAsocciation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ImagesProductAsocciation.belongsTo(models.Product, {
        foreignKey: "id",
        target_key: "ProductId",
      });
      ImagesProductAsocciation.belongsTo(models.ImageProduct, {
        foreignKey: "id",
        target_key: "ImageProductId",
      });
    }
  }
  ImagesProductAsocciation.init({
    ProductId: DataTypes.INTEGER,
    ImageProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ImagesProductAsocciation',
  });
  return ImagesProductAsocciation;
};