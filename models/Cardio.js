const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Cardio extends Model{}

Cardio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        workout: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Long Run",
        },
        distance: {
            type: DataTypes.STRING,
        },
        time: {
            type: DataTypes.INTEGER,
        },
        numberOfSet: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'cardio',
    }
);

module.exports = Cardio;