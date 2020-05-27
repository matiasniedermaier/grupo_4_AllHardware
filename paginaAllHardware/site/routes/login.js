const expres = require('express');
const router = expres.Router();
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/registroController');

router.get('/', formulario.login);

router.post('/',[check('email').isEmail()],[check('email').isEmpty()], formulario.login);
console.log('paso por aqui');


module.exports = router;
