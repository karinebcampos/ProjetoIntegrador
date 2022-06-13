const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Registro extends Model { }
Registro.init({
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.STRING
    },
}, {
    sequelize: sequelize,
    modelName: 'registro'
});

module.exports = { Registro };