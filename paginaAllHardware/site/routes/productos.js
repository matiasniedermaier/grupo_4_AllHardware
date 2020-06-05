const express = require('express');
const router = express.Router();
const productos = require('../controller/productosController');

router.get('/', productos.productos);
//router.get('/detalle/:id', productos.detalle)
router.get('/create', productos.create);
router.post('/', productos.createPost);
router.get('/:id', productos.id);
router.get('/:id/edit', productos.edit);
router.put('/:id', productos.editPut);
router.delete('/:id', productos.borrar);

module.exports = router;