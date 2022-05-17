// Estructura del CRUD
const router = require('express').Router();
const {
    getLayout,
    sendEmail
} = require('../controllers/email')

router.get('/:id', getLayout);
router.post('/', sendEmail);

module.exports = router;