const { Model, Sequelize, DataTypes } =require('sequelize');

const sequelize = require(' ..config/connection.js');

class Post extends Model {}

Post.init(
    {
        title: DataType.STRING,
        body: DataTypes.STRING
    },

    {
sequelize

    }
);

Model.exports = Post;