const Sequelize = require('sequelize');
const sequelize = require('../database/DataBase');

class User extends Sequelize.Model {}
User.init({
    key: Sequelize.CHAR,
    name: Sequelize.CHAR,
    lastName: Sequelize.CHAR,
    avatar: Sequelize.TEXT,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT,
    permissions: Sequelize.TEXT 
}, { sequelize, modelName: 'users'});

module.exports = User;