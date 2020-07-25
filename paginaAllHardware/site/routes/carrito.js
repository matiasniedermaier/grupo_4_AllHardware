const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

router.get('/', carritoController.agregarCarrito);
router.post('/', carritoController.agregarCarrito);

router.get('/', carritoController.verCarrito);
router.post('/', carritoController.verCarrito);

module.exports = router;