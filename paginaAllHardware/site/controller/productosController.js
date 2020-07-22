const generateData = require('../models/generate');
const db = require('../database/models');

let productosController = {
    
    productos: (req, res, next) => {
       
        //let archivoProductos= generateData.readJson();
        db.Product.findAll()
            .then( products => {
                res.render('productos', { productos: products });
            }); 
    },

    create: (req, res, next) => {

        res.render('create');

    },

    createPost: (req, res, next)=>{
        
        //let id = generateData.lastID();

        console.log(req.file)

        if(req.file) {
            let avatar = '/images/imagenesProductos/'+ req.file.filename;
        }

        /*let nuevoProducto = {
            id: id,
            name: req.body.name,
            price:req.body.price,
            especification: req.body.especification,
            img: avatar,
            stock: req.body.stock,
            category:'',
            brand:'', 
        };

        archivoProductos = generateData.readJson();

        if(archivoProductos.length == 0){

            archivoProductos.push(nuevoProducto);
            generateData.writeJson(archivoProductos);
        
        }
        else{

            archivoProductos.push(nuevoProducto);
            generateData.writeJson(archivoProductos);

        }*/

        db.Product.create({
            name: req.body.name,
            price:req.body.price,
            stock: req.body.stock,
            especification: req.body.especification,
            img: '/images/imagenesProductos/' + req.file.filename,
            id_category:1,
            id_brand:1
        });

        res.redirect('/productos');

    },

    id: (req, res) => {

        /*archivoProductos= generateData.readJson();

        let productoAMostrar = archivoProductos.filter(function (productos) {

            return req.params.id == productos.id;
        });*/

        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then( product => {
            res.render('detalle',{productosMostrar:product});
        });
    },

    edit: (req, res) => {

        /*archivoProductos= generateData.readJson();

        let productoAMostrar = archivoProductos.filter(function (productos) {

            return req.params.id == productos.id;

        });*/
        
        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then( product => {
            res.render('edit',{productosMostrar:product});
        });

    },

    editPut: (req, res) => {
        
        /*archivoProductos= generateData.readJson();

        let productosAMostrar = archivoProductos.find(function (productos) {

            return req.params.id == productos.id;

        });

        productosAMostrar.name = req.body.name;
        productosAMostrar.stock = req.body.stock;
        productosAMostrar.price = req.body.price;
        productosAMostrar.stock = req.body.stock;
        productosAMostrar.especification = req.body.especification;*/

        if (req.files != 'undefined'){
            db.Product.update({
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price,
                especification: req.body.especification,
                img: '/images/imagenesProductos/'+ req.file.filename
            },{
                where: {
                    id: req.params.id
                }
            });
        } else {
            db.Product.update({
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price,
                especification: req.body.especification
            },{
                where: {
                    id: req.params.id
                }
            });
        }
            
        /*let productosASubir = archivoProductos.filter(function (productos) {
                
            return req.params.id != productos.id;
                
        });
            
        productosASubir.push(productosAMostrar);
            
        generateData.writeJson(productosASubir);*/ 
        
        res.redirect('/productos');

    },

    borrar: (req,res) => {

        /*archivoProductos = generateData.readJson();

        generateData.writeJson(generateData.deleteID(req,archivoProductos));*/

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/productos');
        
    }

}

module.exports = productosController;
