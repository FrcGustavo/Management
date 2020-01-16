const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');
//const Article = require('./ArticlesModel');

class Category extends Sequelize.Model {}
Category.init({
    key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT
}, { sequelize, modelName: 'Category' });


module.exports = Category;