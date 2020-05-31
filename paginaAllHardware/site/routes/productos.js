const express = require('express');
const router = express.Router();
const productos = require('../controller/productosController');

router.get('/', productos.productos);
router.get('/create', productos.create);
router.post('/', productos.createPost);
router.get('/:id',);
router.get('/:id/edit');
router.put('/:id/edit');
router.delete('/:id');

module.exports = router;