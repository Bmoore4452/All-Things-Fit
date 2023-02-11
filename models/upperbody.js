const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UpperBody extends Model {}

UpperBody.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    workout: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfSet: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numberOfRep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "upperbody",
  }
);

module.exports = UpperBody;
