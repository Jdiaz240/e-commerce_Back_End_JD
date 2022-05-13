const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//creates the category class
class Category extends Model {}
//intializes the category table and its columns
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, //requires a number
      allowNull: false, //cannot be blank
      primaryKey: true, //creates a unique id
      autoIncrement: true, //always creates a new id for each new category
    },
    category_name: {
      type: DataTypes.STRING, //requires a string entry
      allowNull: false, //cannot have a blank entry
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
