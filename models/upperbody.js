const {Model, DataTypes} = require("sequelize");
const sequelize = require("../condfig/connection");

class UpperBody extends Model{}

UpperBody.init(
    {
    id:{
       type:DataTypes.INTEGER 

    },
     workout:{
        type: DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING

    }
}
)

