const generateData = require ('../models/generate');

let homeController = {

    home: (req, res) => {

        let archivoProductos = generateData.readJson();
        res.render('home', { productos: archivoProductos});

    }

}

module.exports = homeController;