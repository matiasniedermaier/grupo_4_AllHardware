const express = require('express');
const router = express.Router();
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/registroController');

router.get('/', formulario.login);

router.post('/',[check('email').isEmail()],[check('email').isEmpty()], formulario.login);


module.exports = router;
