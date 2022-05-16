const express = require('express');
const { sequelize } = require('./db');
const { usuario } = require('./back-end/usuario.js');

const app = express();

app.listen(3000, async () => {
    await sequelize.sync();
    console.log('app is running on port 3000');
});