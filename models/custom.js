const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Custom extends Model{}

Custom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        cardio: {
            type: DataTypes.String,
        },
        upper:{
            type: DataTypes.String,
        },
        lower:{
            type: DataTypes.String,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'custom',
    }
);

module.exports = Custom;