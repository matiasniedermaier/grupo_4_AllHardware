const express = require('express');
const router = express.Router();

const home = require ('../controller/homeController');

router.get('/', home.home);

module.exports = router;
