const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');

class Category extends Sequelize.Model {}
Category.init({
    key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT
}, {sequelize, modelName: 'Categories'});

module.exports = Category;