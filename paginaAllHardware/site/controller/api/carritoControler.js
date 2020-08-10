/*const db = require('../../database/models');
const { promises } = require('fs');

let apiCarritoController = {

    view: async (req, res) => {

        let Product = await db.Product.findAll();
        let Cart = await db.Cart.findAll( {where: {id_user:req.session.user} } );
        let User = await db.User.findByPk(req.session.user);

        Promise.all( [Product, Cart, User] )
            .then( ( [Product, Cart, User] ) => {
                let respuesta = {
                    meta: {
                        status: 200,
                        //total: Cart.id_products.length,
                        url: '/api/carrito'
                    },
                    data: { Product, Cart, User }
                }
                return res.json(respuesta);
            });

    }

};

module.exports = apiCarritoController;*/