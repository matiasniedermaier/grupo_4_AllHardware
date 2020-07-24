/*const { id } = require("./productosController");
const db = require("../database/models");*/

let carritoController = {

   agregarCarrito: (req,res) => {
<<<<<<< HEAD
        db.Cart.create({
            id_user: 1,
            id_products: 1,
            cantidad: 1,
            price_total: 0

        })
        res.redirect('/carrito')

    }, 
    verCarrito: (req, res) =>{
       db.Cart.findAll({
        where: {
           id_user: req.session.id,
        }
    }).then( cart => {
        console.log (cart)
       return  res.render('/carrito')
        
    });
     
    }
    
=======
        /*db.Cart.create({
            id_user: req.session.id,
            id_product: req.params.id_product,
            cantidad: 1,
            price_total: 0
        })*/
        res.render('carrito');
    }

>>>>>>> 9d2925ff20a7c03cf847a7ea305bb0f5fc58d17e
};

module.exports = carritoController;