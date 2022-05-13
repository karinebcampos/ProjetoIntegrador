var Sequelize = require('sequelize');
var connection = new Sequelize('acqua', 'root','Kc*101966',{
host: 'localhost',
dialect: 'mysql'});
var conexao = connection.authenticate()
    .then(function () {
        console.log('Conexão com o MySQL foi estabelecida com sucesso');
    })
    .catch(function (err) {
        console.log('Não foi possível se conectar com o banco de dados My5ql');
    })
    .done();