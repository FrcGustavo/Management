const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');
const Category = require('../models/CategoriesModel');

class Article extends Sequelize.Model {}
Article.init({
    key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    state: Sequelize.INTEGER,
    visibility: Sequelize.INTEGER,
    maximum: Sequelize.FLOAT,
    minimum: Sequelize.FLOAT,
    unity: Sequelize.ENUM('KG', 'PZ'),
    CategoryId: {
        type: Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'CategoryId'
        }
    }
},{ sequelize, modelName: 'Article' });

Category.hasMany(Article);
Article.belongsTo(Category);

module.exports = Article;