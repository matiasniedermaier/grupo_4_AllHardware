const generateData = require('../models/generate');
const bcrypt = require('bcrypt');
const {check, validationResult, body} =  require('express-validator');
const generate = require('../models/generate');
const { read } = require('fs');

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
        

        if(errors.isEmpty() ){

            let logueado = null;
            let users = generate.readJsonUser();
            console.log(users);
            for( let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                     logueado = users[i];
                }
            }
            if(req.body.recordame) {

//por 300 segundos
                res.cookie('timeLogin', logueado.email, { expires: new Date(Date.now() + 300000)});
               
            }

            req.session.logueado = logueado;

            return res.redirect('/');

        } else {
            
            return res.render('users/login', {errors : errors.mapped()});

        }
        

    },

/*     profile: (req, res) => {
        res.render('users/profile');
    } */
    
}

module.exports = userController;