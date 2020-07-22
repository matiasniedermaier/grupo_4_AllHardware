const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

<<<<<<< HEAD
router.get('/Carrito', userMiddleware, carritoController.agregarCarrito);
//router.get('/listarCarrito', userMiddleware, carritoController.listarCarrito);
=======
router.get('/carrito', userMiddleware, carritoController.carrito);
router.get('/listarCarrito', userMiddleware, carritoController.listarCarrito);
>>>>>>> 680b6ede5044f38d3b57e210224c6e3fc564d3cd

module.exports = router;