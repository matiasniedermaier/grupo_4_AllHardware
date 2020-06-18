const generateData = require('../models/generate');
const bcrypt = require('bcrypt');

let userController = {

    registro: (req, res) => {

        res.render('users/registro')

    },

    registroPost: (req, res) => {

        let id = generateData.lastIDUser();

        let nuevoUsuario = {
            id: id,
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
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

        res.redirect('/');

    },

    login: (req, res) => {

        res.render('users/login')

    },

    loginPost: (req, res) => {

        archivoUsers = generateData.readJsonUser();

        let resultado = false;

        for (let i=0; i < archivoUsers.length; i++){

            if (req.body.email == archivoUsers[i].email)
                if(bcrypt.compareSync(req.body.password, archivoUsers[i].password))
                    resultado = true;
        }

        if (resultado){

            res.redirect('/');

        }else{

            res.send('No coincide');

        }

    }
    
}

module.exports = userController;