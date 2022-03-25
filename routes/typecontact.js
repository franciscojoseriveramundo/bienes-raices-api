// Estructura del CRUD
const router = require('express').Router();
const {
    createTypeContact,
    getTypeContact,
    editTypeContact,
    deleteTypeContact,
    getTypeContactById
} = require('../controllers/typecontact')

router.get('/', getTypeContact)
router.get('/:id', getTypeContactById)
router.post('/', createTypeContact)
router.put('/', editTypeContact)
router.delete('/:id', deleteTypeContact)

module.exports = router;