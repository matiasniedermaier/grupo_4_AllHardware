const { id } = require("./productosController");
const db = require("../database/models");

let carritoController = {

   carrito: (req,res) => {
        db.Cart.create({
            id_user: req.session.id,
            id_product: req.params.id_product,
            cantidad: 1,
            price_total: 0

        })
        res.render('carrito')
    },
    listarCarrito: (req, res) =>{

        res.render('listarCarrito')*/

    }

    
};

module.exports = carritoController;