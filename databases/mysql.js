const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'dbmanager',
    'root',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

module.exports = sequelize;