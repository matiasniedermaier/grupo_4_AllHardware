const fs = require ('fs');

let productosController = {

    'productos': (req, res, next) => {

        let productos = fs.readFileSync ('../data/products.json', {encoding:'utf-8'});

        let productosJson = JSON.parse(productos);

        res.render('productos', {productosJson: productosJson});
    },

    'create': (req, res) => {

        //let productos = fs.readFileSync ('/data/productos.json', {encoding:'utf-8'});

        //let productosJson = JSON.parse(productos);

        //productosJson.push(req.body.) 



        res.render('create')
    }

}

module.exports = productosController;
