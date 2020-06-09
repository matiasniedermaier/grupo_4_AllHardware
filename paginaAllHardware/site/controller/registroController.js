const generateData = require('../models/generate');

let registroController = {

    registro: (req, res) => {

        res.render('registro')

    },

    registroPost: (req, res) => {

        let id = generateData.lastIDUser();

        let nuevoUsuario = {
            id: id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
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

        res.render('login')

    },

    loginPost: (req, res) => {

        archivoUsers = generateData.readJsonUser();

        let resultado = false;

        for (let i=0; i < archivoUsers.length; i++){

            if (req.body.email == archivoUsers[i].email && req.body.password == archivoUsers[i].password)
                resultado = true;

        }

        if (resultado){

            res.redirect('/');

        }else{

            res.send('No coincide');

        }

    }
    
}

module.exports = registroController;