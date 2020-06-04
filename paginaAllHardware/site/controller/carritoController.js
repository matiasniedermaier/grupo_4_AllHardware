let carritoController = {

    carrito: (req,res) => {
        res.render('carrito')
    },

    detalle: (req,res)=>{
        res.render('detalle')
    }

}

module.exports = carritoController;