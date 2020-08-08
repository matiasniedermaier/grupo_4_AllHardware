const { id } = require("./productosController");
const db = require("../database/models");
const { promises } = require("fs");

let carritoController = {

    agregarCarrito: async (req,res) => {

        let product = await db.Product.findByPk(req.params.id)
            /*.then( product => {
                return product.price;
            })*/

        console.log(req.params.id, 'acaaaaa')

        db.Cart.create({
            id_user: req.session.user,
            id_products: req.params.id,
            cantidad: req.body.numero,
            price_total: product.price,
        })

        res.redirect('/carrito');

    }, 
    verCarrito: (req, res) =>{

        db.Cart.findAll({
        where: {
           id_user: req.session.id,
        }
        }).then( cart => {
            console.log (cart)
            return  res.render('carrito', { cart })
        });

    }
    
};

module.exports = carritoController;