const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');
const Client = require('./ClientsModel');
const OrderArticle = require('./OrderArticlesModel');

class Order extends Sequelize.Model {}
Order.init({
    key: Sequelize.CHAR,
    ClientId: Sequelize.INTEGER,
    totalPrice: Sequelize.FLOAT,
    totalArticles: Sequelize.INTEGER,
    deliveryDate: Sequelize.TIME
}, { sequelize, modelName: 'Order' });

Client.hasMany(Order);
Order.belongsTo(Client);
Order.hasMany(OrderArticle);
OrderArticle.belongsTo(Order);

module.exports = Order;