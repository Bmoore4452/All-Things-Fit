const { Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");


// Name, height,weight, age, goal

class Profile extends Model {}

Profile.init(
    {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
 
  },
  age:{
   type: DataTypes.INTEGER,
},
    height:{
        type: DataTypes.INTEGER,
  },
 weight:{
    type: DataTypes.INTEGER,
 },
 gender:{
    type:DataTypes.STRING,
 },
 bmr:{
   type: DataTypes.INTEGER,
   
},
ibw:{
   type: DataTypes.INTEGER,
 
},
goal:{
   type: DataTypes.STRING,
   
},user_id:{
    type: DataTypes.INTEGER,
    refrences:"User",
    referencesKey:"id",
    allowNull: false,
 },

},
{
    sequelize,
    underscored:true,
    freezeTableName:true,
    modelName:"Profile"
}
);
module.exports = Profile;