const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('acqua', 'root',process.env.DB_PASSWORD || 'Kc*101966',
    {
        dialect: 'mysql',
        host: 'localhost'    });

module.exports = { sequelize };

