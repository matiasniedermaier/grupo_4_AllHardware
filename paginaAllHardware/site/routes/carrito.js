const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

router.post('/', carritoController.agregarCarrito);
router.get('/', carritoController.verCarrito);


module.exports = router
