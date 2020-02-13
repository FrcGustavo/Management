const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');

class OrderArticle extends Sequelize.Model {}
OrderArticle.init({
    key: Sequelize.CHAR,
    OrderId: Sequelize.INTEGER, 
    name: Sequelize.CHAR,
    category: Sequelize.CHAR,
    unity: Sequelize.CHAR,
    count: Sequelize.INTEGER, 
    price: Sequelize.FLOAT, 
    totalPrice: Sequelize.FLOAT, 
}, { sequelize, modelName: 'OrderArticle' });



module.exports = OrderArticle;