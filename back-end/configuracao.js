const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db');

class Configuracao extends Model { }
Configuracao.init({
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
    },
    cpf: {
        type: DataTypes.STRING
    },
    alterar_senha: {
        type: DataTypes.STRING
    },
    unidade_consumidora: {
        type: DataTypes.STRING
    },
    qtd_pessoas: {
        type: DataTypes.STRING
    },
    meta_consumo: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.STRING
    },
    complemento: {
        type: DataTypes.STRING
    },
}, {
    sequelize: sequelize,
    modelName: 'configuracao'
});

module.exports = { Configuracao };