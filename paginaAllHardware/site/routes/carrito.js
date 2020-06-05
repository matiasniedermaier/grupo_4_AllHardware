const express = require('express');
const router = express.Router();
const carrito = require ('../controller/carritoController');

router.get ('/', carrito.carrito);

module.exports = router;