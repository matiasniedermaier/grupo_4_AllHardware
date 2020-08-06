const express = require('express');
const router = express.Router();
const {check, validationResult, body} =  require('express-validator');
const users = require('../controller/usersController');
const generate = require('../models/generate');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const guestMiddleware = require('../middlewares/guestMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');
const db = require('../database/models');
const { saveProfile } = require('../controller/usersController');


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
    /*fileFilter: (req, file, cb) => {
        const fileTypes = ['jepg', 'jpg', 'png'];
        const extname = path.extname(file.originalname);
        if(fileTypes.includes(extname)) {
            cb(null, true);
        } else {
            req.file = file;
            cb(null, false);
        }
    }*/
});

router.get('/login', guestMiddleware, users.login);

router.post('/login', [

    
    check('email').isEmail().withMessage('El email debe ser un email valido').custom(async(value,{req}) => {
        
        let user= await db.User.findOne({ where:{email:value}}) 
        
        if (user == null) {
            
            return Promise.reject('Email invalido');
            
        }
        
    }),

    check('password').custom(async(value,{req}) => {
        
        let user= await db.User.findOne({ where:{email:req.body.email}});
        
        if (user && !bcrypt.compareSync(value , user.password)) {
            
            return Promise.reject('Contraseña invalida');
        }
    
    })], users.loginPost);

router.get('/registro',guestMiddleware,users.registro);

router.post('/registro', upload.single('img'), [
    check('name').isLength({min:2}).withMessage('Debes escribir un nombre'),
    check('email').isEmail().withMessage('El email debe ser un email valido').custom( async value => {
        let user= await db.User.findOne({ where:{email:value}})    
        if (user != null) {
            return Promise.reject('Este email ya esta registrado');
        }
    }),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener un minimo de 8 caracteres'),
    check('confirm_password').custom( (value, { req }) => {
        if (value != req.body.password) {
            return false;
        }
        return true;
    }).withMessage('No coinciden las contraseñas'),
    check('img').custom(( value, { req }) => {
        if( req.file != undefined) {
            const fileTypes = ['.jepg', '.jpg', '.png', '.gif'];
            const extname = path.extname(req.file.originalname);
            return fileTypes.includes(extname);
        }
        return false;
    }).withMessage('La imagen debe ser un formato JPG, GIF, JEPG o PNG') ],
    users.registroPost);

router.get('/profile', userMiddleware, users.profile);

router.get('/profile/edit', userMiddleware, users.editProfile);

router.post('/profile', upload.single('img'), [
    check('name').isLength({min:5}).withMessage('Debes escribir un nombre'),
    check('email').isEmail().withMessage('El email debe ser un email valido'),
    body('img').custom(( value, { req }) => {
        if( req.file != undefined) {
            const fileTypes = ['.jepg', '.jpg', '.png'];
            const extname = path.extname(req.file.originalname);
            return fileTypes.includes(extname);
        }
        return true;
    }).withMessage('La imagen debe ser un formato JPG, JEPG o PNG') ],
    users.saveProfile);

router.get('/logout', users.logout);

module.exports = router;