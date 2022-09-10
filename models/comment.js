const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/config');


class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
        postId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id',
            },
            commentContent: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            dateCreated: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                defaultValue: DataTypes,NOW,
            },
        }, 
      },
      {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;