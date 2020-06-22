const express = require('express');
const router = express.Router();
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/usersController');

router.get('/login', formulario.login);

router.post('/login', formulario.loginPost);

router.get('/registro', formulario.registro);

router.post('/registro', [
    check('name').isLength({min:5}).withMessage('Debes escribir un nombre'),
    check('email').isEmail().withMessage('El email debe ser un email valido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    check('confirm_password').custom( (value, { req }) => {

        if (value != req.body.password) {
            return false;
        }
        return true;
    }).withMessage('No coinciden las contraseñas') ],
    formulario.registroPost);

module.exports = router;