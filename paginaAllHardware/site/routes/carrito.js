const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

router.get('/Carrito', userMiddleware, carritoController.agregarCarrito);
//router.get('/listarCarrito', userMiddleware, carritoController.listarCarrito);

module.exports = router;