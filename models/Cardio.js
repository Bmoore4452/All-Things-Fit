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
        },
        distance: {
            type: DataTypes.INTEGER,
        },
        time: {
            type: DataTypes.TIME,
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