// Estructura del CRUD
const router = require('express').Router();
const {
    getUserForLogin
} = require('../controllers/users')

router.post('/', getUserForLogin)

module.exports = router;