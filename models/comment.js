const {Model, Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Commenting extends Model {}

Commenting.init(
{

    body: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize
}
);


module.exports = Comment;