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
        workout: {
            type: DataTypes.STRING,
        },
        user_name:{
            type: DataTypes.STRING,
            refrences:"User",
            referencesKey:"id",
            allowNull: false,
         },
         user_id: {
            type: DataTypes.INTEGER,
            refrences:"User",
            referencesKey:"id",
            allowNull: false,
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