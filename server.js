require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db');
const { Registro } = require('./back-end/register.js');
const { Dados } = require('./back-end/dados.js');
const { Configuracao } = require('./back-end/configuracao');
const { config } = require('dotenv');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post('/register', async (req,res) => {
    console.log(req.body);
    const registro = new Registro();
    registro.nome = req.body.name;
    registro.email = req.body.email;
    registro.senha = req.body.password;
    await registro.save();
    res.json(registro);
})

app.get('/dados', async (req,res) => {
    console.log(req.body);
    const dados = await Dados.findOne();
    res.json(dados)
});

app.post('/dados', async (req,res) => {
    console.log(req.body);
    const dados = new Dados();
    dados.hidrometro = req.body.hidrometro;
    dados.dt_leitura = req.body.dt_leitura;
    dados.valortarifa = req.body.valortarifa;
    await dados.save();
    res.json(dados);
})

app.put('/dados/:id', async (req, res) => {
    const dados = await Dados.findByPk(req.params.id);
    if (!dados)
        return res.status(404).send('Cadastro não encontrado');
    dados.hidrometro = req.body.hidrometro;
    dados.dt_leitura = req.body.dt_leitura;
    dados.valortarifa = req.body.valortarifa;   
    await dados.save();
    res.json(dados);
})

app.get('/configuracoes', async (req,res) => {
    console.log(req.body);
    const configuracao = await Configuracao.findOne();
    res.json(configuracao)
});

app.post('/configuracoes', async (req,res) => {
    console.log(req.body);
    const configuracao = new Configuracao();
    configuracao.nome = req.body.nome;
    configuracao.email = req.body.email;
    configuracao.cpf = req.body.cpf;
    configuracao.alterar_senha = req.body.alterar_senha;
    configuracao.unidade_consumidora = req.body.unidade_consumidora;
    configuracao.qtd_pessoas = req.body.qtd_pessoas;
    configuracao.meta_consumo = req.body.meta_consumo;
    configuracao.cep = req.body.cep;
    configuracao.cidade = req.body.cidade;
    configuracao.estado = req.body.estado;
    configuracao.endereco = req.body.endereco;
    configuracao.numero = req.body.numero;
    await configuracao.save();
    res.json(configuracao);
})

app.put('/configuracoes/:id', async (req, res) => {
    const configuracao = await Configuracao.findByPk(req.params.id);
    if (!configuracao)
        return res.status(404).send('Cadastro não encontrado');
    configuracao.nome = req.body.nome;
    configuracao.email = req.body.email;
    configuracao.cpf = req.body.cpf;
    configuracao.alterar_senha = req.body.alterar_senha;
    configuracao.unidade_consumidora = req.body.unidade_consumidora;
    configuracao.qtd_pessoas = req.body.qtd_pessoas;
    configuracao.meta_consumo = req.body.meta_consumo;
    configuracao.cep = req.body.cep;
    configuracao.cidade = req.body.cidade;
    configuracao.estado = req.body.estado;
    configuracao.endereco = req.body.endereco;
    configuracao.numero = req.body.numero;
    await configuracao.save();
    res.json(configuracao);
})

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('app is running on port 3000');
});