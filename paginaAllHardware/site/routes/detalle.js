const express = require('express');
const router = express.Router();
const detalle = require ('../controller/carritoController');

router.get('/', detalle.detalle)

module.exports = router;