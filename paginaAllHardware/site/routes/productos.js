const express = require('express');
const router = express.Router();
//const carrito = require ('../controller/carritoController');
const productos = require('../controller/productosController');
const userMiddleware = require('../middlewares/userMiddleware');
//librerias que necesito para trabajar con multer.
const multer=require('multer');
const {check, validationResult, body} =  require('express-validator');
const path = require('path');
const productosController = require('../controller/productosController');


//definimos donde vamos a guardar las imagenes que se suban.
var storage = multer.diskStorage({

    destination: function (req, file, cb) {

        cb(null, __dirname + '/../../public/images/imagenesProductos');
        //console.log(destination);
    },
   
//usamos el metodo .extreme para obtener la extencion del archivo
    filename: function (req, file, cb) {
        console.log(file);

       return cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));

    }

});
  
var upload = multer({ storage: storage,
    /*fileFilter: (req, file, cb) => {
        const fileTypes = ['jepg', 'jpg', 'png'];
        const extname = path.extname(file.originalname);
        if(fileTypes.includes(extname)) {
            cb(null, true);
        } else {
            req.file = file;
            cb(null, false);
        }
    } */
});


router.get('/', productos.productos);

router.get('/create', userMiddleware, productos.create);

//implementamos upload.single()(middleware)
router.post('/', upload.single('img'),[
    check('name').isLength({min:2}).withMessage('Debes escribir un nombre'),
    check('especification').isLength({min:20}).withMessage('Debe tener un mínimo de 20 caracteres'),
    check('img').custom(( value, { req }) => {
        if( req.file != undefined) {
            const fileTypes = ['.jepg', '.jpg', '.png', '.gif'];
            const extname = path.extname(req.file.originalname);
            return fileTypes.includes(extname);
        }
        return false;
    }).withMessage('La imagen debe ser un formato JPG, JEPG, GIF o PNG')
], productos.createPost);

router.get('/:id', productos.id);

router.get('/:id/edit',  userMiddleware, productos.edit);

router.put('/:id', upload.single('img'), [
    check('name').isLength({min:2}).withMessage('Debes escribir un nombre'),
    check('especification').isLength({min:20}).withMessage('Debe tener un mínimo de 20 caracteres'),
    check('img').custom(( value, { req }) => {
        if( req.file != undefined) {
            const fileTypes = ['.jepg', '.jpg', '.png', '.gif'];
            const extname = path.extname(req.file.originalname);
            return fileTypes.includes(extname);
        }
        return false;
    }).withMessage('La imagen debe ser un formato JPG, JEPG, GIF o PNG')
], productos.editPut);

//trabajando con la parte de delite......
router.delete('/:id',userMiddleware, productos.borrar);

module.exports = router;