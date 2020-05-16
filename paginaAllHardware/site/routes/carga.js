const expres = require('express');
const router = expres.Router();
const form = require('../controller/registroController')

router.get('/', form.carga);

router.post('/', form.carga);

module.exports = router; 