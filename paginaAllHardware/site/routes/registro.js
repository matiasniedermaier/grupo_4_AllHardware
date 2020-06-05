const express = require('express');
const router = express.Router();
const formulario = require('../controller/registroController')

router.get('/', formulario.registro)
//function(req, res, next) {
   // res.render('registro', formulario.registro);
  //});
router.post('/', formulario.registro);

    
module.exports = router;