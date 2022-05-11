const router = require('express').Router();
const {
    getProducts,
    getGaleryForProductId,
    createRequest
} = require('../controllers/products')

router.get('/', getProducts);
router.get('/:id', getGaleryForProductId);
router.post('/request/', createRequest);

module.exports = router;