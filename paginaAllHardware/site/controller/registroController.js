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

        archivoUsers = generateData.readJsonUser();

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


        res.redirect('/');

    }
    
}
module.exports = registroController;