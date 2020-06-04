const express = require('express');
const router = express.Router();
const productos = require('../controller/productosController');

router.get('/', productos.productos);
router.get('/create', productos.create);
router.post('/', productos.createPost);
router.get('/:id', productos.id);
router.get('/:id/edit', productos.edit);
router.put('/:id', editPut);
router.delete('/:id', borrar);

module.exports = router;