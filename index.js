const express = require('express');
const sequelize = require('./config/database'); // Conexão com o banco de dados
const User = require('./models/user'); // Modelo de usuário
const jwt = require('jsonwebtoken');


// Conexão com o banco de dados
sequelize.authenticate().then(() => {
    console.log('Conectado ao banco de dados!');
}).catch((error) => {
    console.error('Falha ao conectar ao banco de dados:', error);
});

// Sincronização dos modelos com o banco de dados
User.sync().then(() => {
    console.log('Modelos sincronizados com o banco de dados!');
});
