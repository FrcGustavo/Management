const Sequelize = require('sequelize');
const sequelize = require('../../databases/mysql');

class User extends Sequelize.Model {}
User.init({
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_key: Sequelize.CHAR,
    firstName: Sequelize.CHAR,
    lastName: Sequelize.CHAR,
    avatar: Sequelize.TEXT,
    email: Sequelize.CHAR,
    password: Sequelize.TEXT,
    permissions: Sequelize.TEXT,
    active: Sequelize.TINYINT,
}, { sequelize, modelName: 'users'});

module.exports = User;