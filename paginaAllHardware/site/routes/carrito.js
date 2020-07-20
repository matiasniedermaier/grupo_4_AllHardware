const express = require('express');
const router = express.Router();

const carrito = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

//router.get('/', userMiddleware, carrito.crear);
//router.get('/listarCarrito', userMiddleware, carrrito.listarCarrito);

module.exports = router;