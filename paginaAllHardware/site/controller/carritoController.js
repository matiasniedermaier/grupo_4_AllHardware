const { id } = require("./productosController");
const db = require("../database/models");
const { promises } = require("fs");

let carritoController = {

    agregarCarrito: async (req,res) => {

        let product = await db.Product.findByPk(req.params.id)
            /*.then( product => {
                return product.price;
            })*/

        console.log(req.params.id, 'goooll')

        await db.Cart.create({
            id_user: req.session.user,
            id_products: req.params.id - 1,
            cantidad: req.body.numero,
            price_total: product.price,
        })

        res.redirect('/productos');

    }, 
    verCarrito: async (req, res) =>{

        /*db.Cart.findAll({
        where: {
           id_user: req.session.id,
        }
        }).then( cart => {
            return  res.render('carrito', { cart })
        });*/

        let promiseCart = await db.Cart.findAll({ where: {id_user: req.session.user} });
        let promiseProduct = await db.Product.findAll();
        let promiseUser = await db.User.findByPk(req.session.user);

        Promise.all( [promiseCart, promiseProduct, promiseUser] )
            .then(( [cart, product, user] ) => {
                return res.render('carrito', { cart, product, user })
            });

    }
    
};

module.exports = carritoController;