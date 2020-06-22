const express = require('express');
const router = express.Router();
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/usersController');
const generateData = require('../models/generate');
const bcrypt = require('bcrypt');
const multer = require('multer');

var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, __dirname + '/../../public/images/users');
       // console.log(destination);
    },
   
//usamos el metodo .extreme para obtener la extencion del archivo
    filename: function (req, file, cb) {
        //console.log(file);

       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }

});

var upload = multer({ storage: storage })

router.get('/login', formulario.login);

router.post('/login', upload.any(), [
    check('email').custom( value => {
        return generateData.findUserEmail(value);
    }).withMessage('Este email no esta registrado'),
    check('password').custom( value => {
        return generateData.findUserPassword(value);
    }).withMessage('Contraseña Invalida') ], 
    formulario.loginPost);

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