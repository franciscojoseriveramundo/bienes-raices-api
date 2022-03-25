const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<center><h1>Bienvenido al API de Bienes Raices</h1></center>')
});

router.use('/userrole', require('./userrole'));
router.use('/sex', require('./sex'));
router.use('/typecontactregister', require('./typecontactregister'));
router.use('/typecontact', require('./typecontact'));

module.exports = router;