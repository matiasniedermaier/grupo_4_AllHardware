const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

router.get('/', userMiddleware, carritoController.verCarrito);
router.post('/:id', userMiddleware, carritoController.agregarCarrito);


module.exports = router
