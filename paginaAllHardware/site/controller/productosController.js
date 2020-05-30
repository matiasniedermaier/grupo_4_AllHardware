const fs = require ('fs');

let productosController = {

    'productos': (req, res, next) => {

        let productosJson = fs.readFileSync ('../data/products.json', {encoding:'utf-8'});

        let productos = JSON.parse(productosJson);

        res.render('productos', { productos: productos })
    },

    'create': (req, res) => {

        //let productos = fs.readFileSync ('/data/productos.json', {encoding:'utf-8'});

        //let productosJson = JSON.parse(productos);

        //productosJson.push(req.body.) 



        res.render('create')
    }

}

module.exports = productosController;
