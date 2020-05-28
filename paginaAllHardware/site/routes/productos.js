const express = require('express');
const router = express.Router();
const productos = require('../controller/productosController');

router.get('/', productos.productos);

router.post('/', productos.productos);

router.get('/create', productos.create);


module.exports = router;