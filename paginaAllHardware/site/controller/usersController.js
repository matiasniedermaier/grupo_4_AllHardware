const generateData = require('../models/generate');
const bcrypt = require('bcrypt');
const {check, validationResult, body} =  require('express-validator');
const generate = require('../models/generate');
const { read } = require('fs');
const db = require('../database/models');

let userController = {

    registro: (req, res) => {

        res.render('users/registro', {body : {}})

    },

    registroPost: (req, res, next) => {

        //let id = generateData.lastIDUser();
        let errors = validationResult(req);        
        console.log(errors.mapped())

        if (errors.isEmpty()) {
            console.log(req.file)
            /*let nuevoUsuario = {
                id: id,
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                img: '/images/imagenesProductos/'+req.file.filename,
                promotion: req.body.chk
            };*/

            //let archivoUsers = generateData.readJsonUser();

            /*if(archivoUsers.length == 0){

                archivoUsers.push(nuevoUsers);
                generateData.writeJsonUser(archivoUsers);
            
            }
            else{

                archivoUsers.push(nuevoUsuario);
                generateData.writeJsonUser(archivoUsers);

            }*/

            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                img: '/images/imagenesProductos/'+req.file.filename,
                admin: 0,
                promocion: req.body.chk ? '1' : '0'
            })

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

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then( user => {
                console.log(user.password);
                console.log(req.body.password)
                if(bcrypt.compareSync(req.body.password, user.password)){
                    if(req.body.recordame) {
                        //por 15 minutos
                        res.cookie('timeLogin', logueado, { expires: new Date(Date.now() + 900000)});                     
                    }       
                    req.session.logueado = user.id;
                    res.locals.logeado = user.id;
                    return res.redirect('/');
                }
                res.send('paso por aqui')
            }).catch((error) => {
                console.error(error);
                return res.redirect('users/login');
            })

        } else {
            
            return res.render('users/login', {errors : errors.mapped()});

        }
        

    },

/*     profile: (req, res) => {
        res.render('users/profile');
    } */
    
}

module.exports = userController;