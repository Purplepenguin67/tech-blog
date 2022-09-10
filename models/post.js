const { Model, Sequelize, DataTypes } =require('sequelize');

const sequelize = require('../config/config');

class Post extends Model {}

Post.init(

    {
        id: {
        type: DataTypes.INTEGER,
        allowNUll: false,
        primaryKey: true,
        autoIncrement: true,
        },

        postTitle: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
     postContent: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
     },
     
     dataCreated: {
         type: DataTypes.DATEONLY,
         allowNull: false,
         defaultValue:
         defaultValue: DataTypes.NOW,
    },
    uderId: {
        type: DataTypes.INTEGER,
        referances: {
        model: 'user',
        key: 'id',

    },
},  
},
{
   
sequelize,
timestamps: false,
freezeTableName: true,
underscored:true,
modelName: 'post',
    }
);

Model.exports = Post;