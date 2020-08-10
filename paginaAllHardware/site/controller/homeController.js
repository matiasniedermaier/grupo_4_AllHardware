const generateData = require ('../models/generate');
const db = require ('../database/models');

let homeController = {

    home: (req, res) => {

        db.Product.findAll()
            .then( products => {
                res.render('home', { productos: products });
            })

    }

}

module.exports = homeController;