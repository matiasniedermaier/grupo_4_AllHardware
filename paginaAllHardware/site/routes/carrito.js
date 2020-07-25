const express = require('express');
const router = express.Router();

const carritoController = require ('../controller/carritoController');
const userMiddleware = require('../middlewares/userMiddleware');

<<<<<<< HEAD
router.get('/', carritoController.agregarCarrito);
=======
>>>>>>> 312ca67f2b55b2901f75887363d63ab4f7029e57
router.post('/', carritoController.agregarCarrito);
router.get('/', carritoController.verCarrito);

<<<<<<< HEAD
module.exports = router;
=======

module.exports = router
>>>>>>> 312ca67f2b55b2901f75887363d63ab4f7029e57
