const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

User.sync(); // Sincroniza o modelo com o banco de dados

module.exports = User;