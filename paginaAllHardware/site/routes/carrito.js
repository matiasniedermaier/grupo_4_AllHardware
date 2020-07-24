const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

<<<<<<< HEAD
//router.get('(/', carritoController.agregarCarrito);
router.post('/', carritoController.agregarCarrito);

router.get('/', carritoController.verCarrito);
router.post('/', carritoController.verCarrito);

=======
router.get('/carrito', userMiddleware, carritoController.agregarCarrito);
>>>>>>> 9d2925ff20a7c03cf847a7ea305bb0f5fc58d17e

module.exports = router;