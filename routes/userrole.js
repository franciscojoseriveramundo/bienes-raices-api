// Estructura del CRUD
const router = require('express').Router();
const {
    createUserRole,
    getUserRole,
    editUserRole,
    deleteUserRole,
    getUserRoleById
} = require('../controllers/userrole')

router.get('/', getUserRole)
router.get('/:id', getUserRoleById)
router.post('/', createUserRole)
router.put('/', editUserRole)
router.delete('/:id', deleteUserRole)

module.exports = router;