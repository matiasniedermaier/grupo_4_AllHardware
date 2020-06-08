const express = require('express');
const router = express.Router();
const home = require ('../controller/homeController');
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/registroController');

router.get('/', home.home);
router.get('/login', formulario.login);
router.post('/login',[check('email').isEmail()],[check('email').isEmpty()], formulario.login);
router.get('/registro', formulario.registro);
router.post('/registro', formulario.registro);

module.exports = router;
