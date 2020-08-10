const generateData = require ('../models/generate');
const db = require ('../database/models');
<<<<<<< HEAD
=======

>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
let homeController = {

    home: (req, res) => {

<<<<<<< HEAD
        
=======
>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
        db.Product.findAll()
            .then( products => {
                res.render('home', { productos: products });
            })
<<<<<<< HEAD
=======

>>>>>>> f8a842d04926b232cd7df024790407f8950f78be
    }

}

module.exports = homeController;