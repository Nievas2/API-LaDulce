const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cart, { foreignKey: "userId" })
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: process.env.google_password
      },
      phone: { type: DataTypes.STRING, allowNull: true, defaultValue: "" },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      code: { type: DataTypes.STRING, allowNull: false, defaultValue: "" }
    },
    {
      sequelize,
      modelName: "User"
    }
  )
  return User
}
