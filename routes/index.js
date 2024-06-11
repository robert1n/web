const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const protectedRoutes = express.Router();

protectedRoutes.get('/user', authenticate, async (req, res) => {
    const userId = req.userId;
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    res.status(200).json({ user });
});

app.use('/api/protected', protectedRoutes); // Aplica rotas protegidas

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;