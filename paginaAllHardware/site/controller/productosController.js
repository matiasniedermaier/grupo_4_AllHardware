const fs = require('fs');
const path = require('path');
const generateData = require('../models/generate');




let productosController = {

    
    productos: (req, res, next) => {
       
        let archivoProductos= generateData.readJson();
        res.render('productos', { productos: archivoProductos })
    },

    create: (req, res, next) => {

        res.render('create');

    },

    createPost: (req, res, next)=>{
        
        let id = generateData.lastID();
        let nuevoProducto = {
            id: id,
            name: req.body.name,
            price:req.body.price,
            especification: req.body.especification,
            img: '/images/imagenesProductos/'+req.files[0].filename,
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
        }

        res.redirect('/productos');

    },

    id: (req, res) => {

        archivoProductos= generateData.readJson();

        let productoAMostrar = archivoProductos.filter(function (productos) {
            return req.params.id == productos.id;
        });

        res.render('detalle',{productosMostrar:productoAMostrar});

    },

    edit: (req, res) => {

        archivoProductos= generateData.readJson();

        let productoAMostrar = archivoProductos.filter(function (productos) {
            return req.params.id == productos.id;
        });
        res.render('edit', {productosMostrar:productoAMostrar});

    },

    editPut: (req, res) => {
        
        archivoProductos= generateData.readJson();

        let productosAMostrar = archivoProductos.find(function (productos) {
            return req.params.id == productos.id;
        });
        productosAMostrar.name = req.body.name;
        productosAMostrar.stock = req.body.stock;
        productosAMostrar.price = req.body.price;
        productosAMostrar.stock = req.body.stock;
        productosAMostrar.img = '/images/imagenesProductos/'+req.files[0].filename;

        productosAMostrar.especification = req.body.especification;
        let productosASubir = archivoProductos.filter(function (productos) {
            return req.params.id != productos.id;
        });
        productosASubir.push(productosAMostrar);
        generateData.writeJson(productosASubir);    

        res.redirect('/productos');

    },

    borrar: (req,res) => {

        archivoProductos = generateData.readJson();
        generateData.writeJson(generateData.deleteID(req,archivoProductos));
        res.redirect('/productos');
    }

}

module.exports = productosController;
