const express = require('express');
const router = express.Router();
const carrito = require ('../controller/carritoController');
const productos = require('../controller/productosController');
//librerias que necesito para trabajar con multer.
const multer=require('multer');
const path = require('path');

//definimos donde vamos a guardar las imagenes que se suban.
var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, __dirname + '/../../public/images/imagenesProductos');
        
    },
   
//usamos el metodo .extreme para obtener la extencion del archivo
    filename: function (req, file, cb) {

       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }

});
  
var upload = multer({ storage: storage })


router.get('/', productos.productos);

router.get ('/carrito', carrito.carrito);

router.get('/create', productos.create);

//implementamos upload.any()(middleware)
router.post('/', upload.any(), productos.createPost);

router.get('/:id', productos.id);

router.get('/:id/edit', productos.edit);

router.put('/:id', upload.any(), productos.editPut);

//trabajando con la parte de delite......
router.delete('/:id', productos.borrar);

module.exports = router;