const { id } = require("./productosController");
const db = require("../database/models");

let carritoController = {

   agregarCarrito: (req,res) => {
        db.Cart.create({
            id_user: req.session.id_user,
            id_products: req.params.id_products,
            cantidad: 1,
            price_total: 0
        })
        res.redirect('carrito')

    }, 
    verCarrito: (req, res) =>{
        db.Cart.findAll({
        where: {
           id_user: req.session.id,
        }
        }).then( cart => {
            console.log (cart)
            return  res.render('carrito')
        });

    }
    
};

module.exports = carritoController;