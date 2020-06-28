const generateData = require('../models/generate');
const bcrypt = require('bcrypt');
const {check, validationResult, body} =  require('express-validator');

let userController = {

    registro: (req, res) => {

        res.render('users/registro')

    },

    registroPost: (req, res, next) => {

        let id = generateData.lastIDUser();
        let errors = validationResult(req);        
        console.log(errors.mapped())

        if (errors.isEmpty()) {
            console.log(req.file)
            let nuevoUsuario = {
                id: id,
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                img: '/images/imagenesProductos/'+req.file.filename,
                promotion: req.body.chk
            };

            let archivoUsers = generateData.readJsonUser();

            if(archivoUsers.length == 0){

                archivoUsers.push(nuevoUsers);
                generateData.writeJsonUser(archivoUsers);
            
            }
            else{

                archivoUsers.push(nuevoUsuario);
                generateData.writeJsonUser(archivoUsers);

            }

            return res.redirect('/'); 

        } else {

            return res.render('users/registro', {errors : errors.mapped(), body : req.body});

        }

    },

    login: (req, res) => {

        res.render('users/login')

    },

    loginPost: (req, res) => {

        errors = validationResult(req);
        console.log(errors.mapped());

        if( errors.isEmpty() ){

            if( req.body.check ) {
                req.cookies.recordar = true;
            }
            return res.redirect('/');

        } else {

            return res.render('users/login', {errors : errors.mapped(), body : req.body});

        }
        

    },

    profile: (req, res) => {
        res.render('users/profile');
    }
    
}

module.exports = userController;