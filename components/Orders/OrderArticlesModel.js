const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');
const Order = require('./OrdersModel');

class OrderArticle extends Sequelize.Model {}
OrderArticle.init({
    article_id: {
        type:  Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Order,
            key: 'order_id'
        }
    }, 
    name: Sequelize.CHAR,
    category: Sequelize.CHAR,
    unity: Sequelize.ENUM(['kg', 'pz']),
    count: Sequelize.INTEGER, 
    price: Sequelize.FLOAT, 
    totalPrice: Sequelize.DOUBLE, 
}, { sequelize, modelName: 'order_articles' });

Order.hasMany(OrderArticle, { foreignKey: 'order_id' });
OrderArticle.belongsTo(Order, { foreignKey: 'order_id' });



module.exports = OrderArticle;