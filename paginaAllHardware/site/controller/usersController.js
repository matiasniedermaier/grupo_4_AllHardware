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

        let errors = validationResult(req);        
        console.log(errors.mapped())

        if (errors.isEmpty()) {
            console.log(req.file)

            db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                img: '/images/users/'+req.file.filename,
                admin: 0,
                promocion: req.body.chk ? '1' : '0'
            })

            return res.redirect('/'); 

        } else {

            return res.render('users/registro', {errors : errors.mapped(), body : req.body});

        }

    },

    login: (req, res) => {

        res.render('users/login', {body : {}})

    },

    loginPost:(req, res) => {

        errors = validationResult(req); 
     console.log(errors)
        if(errors.isEmpty() ){

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then( user => {
                console.log(user.password);
                console.log(req.body.password)
                if(bcrypt.compareSync(req.body.password, user.password)){
                    let userId = user.id;
                    if(req.body.recordame) {
                        //por 15 minutos
                        res.cookie('user', userId, { expires: new Date(Date.now() + 90000000)});                     
                    }       
                    req.session.logueado = true;
                    req.session.user = user.id;
                    res.locals.logueado = true;
                    res.locals.user = user.id;
                    return res.redirect('/');
                }
                res.send('paso por aqui')
            }).catch((error) => {
                console.error(error);
                return res.redirect('users/login');
            })

        } else {
            
            return res.render('users/login', {errors : errors.mapped(), body : req.body});

        }

    },

    profile: async (req, res) => {

        let user = await db.User.findByPk(req.session.user)
                return res.render('users/profile', {user});

    },

    editProfile: async (req, res) => {

        await db.User.findByPk(req.session.user)
            .then( user => {
                return res.render('users/editProfile', {user, body : {}});
            })

    },

    saveProfile: async (req, res) => {

        let errors = validationResult(req);
        console.log('hola', req.file, 'holaaa', req.files)
        if(errors.isEmpty() ) {

            //console.log('hola', req.file, 'holaaa', req.files)
            //console.log(req.file)


            if (req.file){
                await db.User.update({
                    name: req.body.name,
                    email: req.body.email,
                    img: '/images/users/'+ req.file.filename
                },{
                    where: {
                        id: req.session.user
                    }
                });
            } else {
                await db.User.update({
                    name: req.body.name,
                    email: req.body.email
                },{
                    where: {
                        id: req.session.user
                    }
                });
            }
                
            return res.redirect('/users/profile');
 
        } else {

            db.User.findByPk(req.session.user)
            .then( user => {
                return res.render('users/editProfile', {user, errors : errors.mapped(),body : {}});
            })

        }

    },

    logout: (req, res) => {

        /*let date = new Date(Date.now() - 100);
        req.session.cookie.expires = date;
        req.session.cookie.maxAge = -100;*/
        res.clearCookie('user')
        req.session.logueado = false;
        req.session.user = null;
        res.locals.logueado = false;
        res.locals.user = null;
        return res.redirect('/');

    }
    
}

module.exports = userController;