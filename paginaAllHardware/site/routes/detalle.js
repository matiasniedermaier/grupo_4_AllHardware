var express = require('express');
var router = express.Router();
var detalle = require ('../controller/carritoController')

router.get('/', detalle.detalle)

module.exports = router;