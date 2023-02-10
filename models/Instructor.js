const { Model, DataTypes } = require("sequelize");
const sequelize = require("../condfig/connection");

class Intructor extends Model {}

Intructor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.time,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "instructor",
  }
);

module.export = Intructor;
