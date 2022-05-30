const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Dados extends Model { }
Dados.init({
    hidrometro: {
        type: DataTypes.STRING,
    },
    dt_leitura: {
        type: DataTypes.STRING
    },
    valortarifa: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequelize,
    modelName: 'dados'
});

module.exports = { Dados };