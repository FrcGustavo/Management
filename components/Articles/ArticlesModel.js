const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');
const Category = require('../Categories/CategoriesModel');

class Article extends Sequelize.Model {}
Article.init({
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    article_key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT,
    price: Sequelize.FLOAT,
    state: Sequelize.INTEGER,
    visibility: Sequelize.INTEGER,
    maximum: Sequelize.FLOAT,
    minimum: Sequelize.FLOAT,
    unity: Sequelize.ENUM('KG', 'PZ'),
    category_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'category_id'
        }
    }
},{ sequelize, modelName: 'articles' });

Category.hasMany(Article, { foreignKey: 'category_id' });
Article.belongsTo(Category, { foreignKey: 'category_id' });

module.exports = Article;