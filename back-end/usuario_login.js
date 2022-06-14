const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Usuario extends Model { }
Usuario.init({
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING
    },
}, {
    sequelize: sequelize,
    modelName: 'usuario'
});

module.exports = { Usuario };