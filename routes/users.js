// Estructura del CRUD
const router = require('express').Router();
const {
    getUserForLogin,
    createUser,
    recoveryUser
} = require('../controllers/users')

router.post('/', getUserForLogin);
router.post('/create/', createUser);
router.get('/recovery/', recoveryUser);

module.exports = router;