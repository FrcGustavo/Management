const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'dbmanager',
    'platzi',
    'platzi',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: true
    }
);

module.exports = sequelize;