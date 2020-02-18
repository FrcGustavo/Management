const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');
const Client = require('../Clients/model');

class Order extends Sequelize.Model {}
Order.init({
    order_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_key: Sequelize.CHAR,
    client_id: Sequelize.INTEGER,
    totalPrice: Sequelize.FLOAT,
    totalArticles: Sequelize.INTEGER,
    deliveryDate: Sequelize.TIME
}, { sequelize, modelName: 'orders' });

Client.hasMany(Order, { foreignKey: 'client_id' });
Order.belongsTo(Client, { foreignKey: 'client_id' });

module.exports = Order;