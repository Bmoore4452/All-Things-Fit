const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// id, workout, description

class LowerBody extends Model {}

LowerBody.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    workout: {
      type: DataTypes.STRING,
    },
    numberOfSets: {
      type: DataTypes.INTEGER,
    },
    numberOfReps: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "lowerBody",
  }
);

module.exports = LowerBody;
