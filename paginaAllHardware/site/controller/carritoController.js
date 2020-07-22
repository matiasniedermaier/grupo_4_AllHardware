const { id } = require("./productosController");
const db = require("../database/models");

let carritoController = {

    crear: (req,res) => {
       /* db.Cart.create({
            id_user: req.session.id,
            id_product: req.params.id_product,
            cantidad: req.body.cantidad,
            price_total: req.body.price_total
        })
        res.render('carrito')
    },
    listarCarrito: (req, res) =>{

        res.render('listarCarrito')*/

    }

    
};

module.exports = carritoController;