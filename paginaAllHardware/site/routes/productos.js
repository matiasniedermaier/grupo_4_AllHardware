const express = require('express');
const router = express.Router();
const carrito = require ('../controller/carritoController');
const productos = require('../controller/productosController');
const userMiddleware = require('../middlewares/userMiddleware');
//librerias que necesito para trabajar con multer.
const multer=require('multer');
const path = require('path');


//definimos donde vamos a guardar las imagenes que se suban.
var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, __dirname + '/../../public/images/imagenesProductos');
       // console.log(destination);
    },
   
//usamos el metodo .extreme para obtener la extencion del archivo
    filename: function (req, file, cb) {
        //console.log(file);

       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }

});
  
var upload = multer({ storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = ['jepg', 'jpg', 'png'];
        const extname = path.extname(file.originalname);
        if(fileTypes.includes(extname)) {
            cb(null, true);
        } else {
            req.file = file;
            cb(null, false);
        }
    } 
});


router.get('/', productos.productos);

router.get ('/carrito', carrito.carrito);

router.get('/create',userMiddleware, productos.create);

//implementamos upload.single()(middleware)
router.post('/', upload.single('img'), productos.createPost);


router.get('/:id', productos.id);

router.get('/:id/edit', userMiddleware,productos.edit);

router.put('/:id', upload.single('img'), productos.editPut);

//trabajando con la parte de delite......
router.delete('/:id',userMiddleware, productos.borrar);

module.exports = router;