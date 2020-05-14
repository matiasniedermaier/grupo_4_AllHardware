const expres = require('express');
const router = expres.Router();
const formulario = require('../controller/registroController')

router.get('/', formulario.login);
router.post('/', formulario.login);

module.exports = router;