var express = require('express');
var router = express.Router();
var home = require ('../controller/homeController')

router.get('/', home.home)

module.exports = router;
