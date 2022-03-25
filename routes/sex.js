// Estructura del CRUD
const router = require('express').Router();
const {
    createSex,
    getSex,
    editSex,
    deleteSex,
    getSexById
} = require('../controllers/sex')

router.get('/', getSex)
router.get('/:id', getSexById)
router.post('/', createSex)
router.put('/', editSex)
router.delete('/:id', deleteSex)

module.exports = router;