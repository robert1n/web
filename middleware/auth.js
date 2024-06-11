const express = require('express');
const jwt = require('jsonwebtoken');
const secret = 'suaChaveSecreta'; // Substitua por sua chave secreta

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token de autenticação não enviado!' });
    }

    const token = authHeader.split(' ')[1]; // Extrai o token do header

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId; // Adiciona o ID do usuário à requisição

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Token de autenticação inválido!' });
    }
};

module.exports = authenticate;
