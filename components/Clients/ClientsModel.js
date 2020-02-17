const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');

class Clients extends Sequelize.Model {}
Clients.init({
    key: Sequelize.CHAR,
    name: Sequelize.CHAR, 
    lastName: Sequelize.CHAR, 
    avatar: Sequelize.TEXT,
    email: Sequelize.TEXT
}, { sequelize, modelName: 'Client' });

module.exports = Clients;