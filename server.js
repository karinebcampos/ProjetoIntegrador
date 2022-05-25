const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db');
const { Usuario } = require('./back-end/usuario.js');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post('/register', async (req,res) => {
    console.log(req.body);
    const usuario = new Usuario();
    usuario.nome = req.body.name;
    usuario.email = req.body.email;
    usuario.senha = req.body.password;
    await usuario.save();
    res.json(usuario);
})

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('app is running on port 3000');
});