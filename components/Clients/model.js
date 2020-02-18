const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');

class Clients extends Sequelize.Model {}
Clients.init({
    client_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    avatar: Sequelize.TEXT,
    email: Sequelize.TEXT,
    active: Sequelize.TINYINT,
}, { sequelize, modelName: 'clients' });

module.exports = Clients;