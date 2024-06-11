const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secret = 'suaChaveSecreta'; // Substitua por uma chave secreta forte

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        const token = jwt.sign({ userId: user.id }, secret);

        res.status(201).json({ message: 'Usuário registrado com sucesso!', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado!' });
        }

        const validPassword = await user.comparePassword(password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Senha incorreta!' });
        }

        const token = jwt.sign({ userId: user.id }, secret);

        res.status(200).json({ message: 'Login efetuado com sucesso!', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };