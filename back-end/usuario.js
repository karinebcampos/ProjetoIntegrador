const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class usuario extends Model { }
usuario.init({
    nome: {
        type: DataTypes.STRING,
    },
    cpf: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.STRING    
    },
    endereco: {
        type: DataTypes.STRING    
    },
    bairro: {
        type: DataTypes.STRING    
    },
    cidade: {
        type: DataTypes.STRING    
    },
    estado: {
        type: DataTypes.STRING    
    },
    pais: {
        type: DataTypes.STRING    
    },
    qtd_pessoas: {
        type: DataTypes.STRING    
    },
    senha: {
        type: DataTypes.STRING    
    }
}, {
    sequelize: sequelize,
    modelName: 'usuario'
});

module.exports = { usuario };