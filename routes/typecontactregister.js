// Estructura del CRUD
const router = require('express').Router();
const {
    createTypeContactRegister,
    getTypeContactRegister,
    editTypeContactRegister,
    deleteTypeContactRegister,
    getTypeContactRegisterById
} = require('../controllers/typecontactregister')

router.get('/', getTypeContactRegister)
router.get('/:id', getTypeContactRegisterById)
router.post('/', createTypeContactRegister)
router.put('/', editTypeContactRegister)
router.delete('/:id', deleteTypeContactRegister)

module.exports = router;