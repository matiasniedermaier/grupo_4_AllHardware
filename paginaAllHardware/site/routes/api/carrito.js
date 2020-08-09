const express = require('express');
const router = express.Router();
const apiCarritoController = require('../../controller/api/carritoControler');
const userMiddleware = require('../../middlewares/userMiddleware');


router.get('/', userMiddleware, apiCarritoController.add);


module.exports = router;