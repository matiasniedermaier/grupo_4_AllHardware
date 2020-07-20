const express = require('express');
const router = express.Router();
const {check, validationResult, body} =  require('express-validator');
const formulario = require('../controller/usersController');
const generate = require('../models/generate');
const multer = require('multer');
const path = require('path');
const guestMiddleware = require('../middlewares/guestMiddleware');


var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, __dirname + '/../../public/images/users');
       // console.log(destination);
    },
   
//usamos el metodo .extreme para obtener la extencion del archivo
    filename: function (req, file, cb) {
        //console.log(file);

       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    },

});

var upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = ['jepg', 'jpg', 'png'];
        const extname = path.extname(file.originalname);
        if(fileTypes.includes(extname)) {
            cb(null, true);
        } else {
            req.file = file;
            cb(null, false);
        }
    }
});

router.get('/login', guestMiddleware, formulario.login);

router.post('/login', [
    check('email').custom( value => {
        return generate.findUserEmail(value);
    }).withMessage('Este email no esta registrado'),
    check('password').custom( (value) => {
        return generate.findUserPassword(value, {req});
    }).withMessage('Contraseña Invalida') ], 
    formulario.loginPost);

router.get('/registro',guestMiddleware,formulario.registro);

router.post('/registro', upload.single('img'), [
    check('name').isLength({min:5}).withMessage('Debes escribir un nombre'),
    check('email').isEmail().withMessage('El email debe ser un email valido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    check('confirm_password').custom( (value, { req }) => {
        if (value != req.body.password) {
            return false;
        }
        return true;
    }).withMessage('No coinciden las contraseñas'),
    check('img').custom(( value, { req }) => {
        if( req.file != undefined) {
            const fileTypes = ['.jepg', '.jpg', '.png'];
            const extname = path.extname(req.file.originalname);
            return fileTypes.includes(extname);
        }
        return false;
    }).withMessage('La imagen debe ser un formato JPG, JEPG o PNG') ],
    formulario.registroPost);

   /*  router.get('/profile', userMiddleware, formulario.profile); */

module.exports = router;