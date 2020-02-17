const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');

class Category extends Sequelize.Model {}
Category.init({
    category_id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category_key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT
}, { sequelize, modelName: 'categories' });


module.exports = Category;
