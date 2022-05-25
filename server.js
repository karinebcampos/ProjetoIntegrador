const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db');
const { Registro } = require('./back-end/register.js');


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

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('app is running on port 3000');
});