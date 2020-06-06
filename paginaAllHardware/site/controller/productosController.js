const fs = require('fs');
const path = require('path');
const generateData = require('../models/generate');




let productosController = {

    
    productos: (req, res, next) => {
       
        let archivoProductos= generateData.readJson();
        res.render('productos', { productos: archivoProductos })
    },

    /*detalle: (req,res)=>{
        // el id que viene del navegador
        let productos= this.leerJSON();
        productos.filter((productos)=>{
            return productos.id == req.params.id;
        })
        res.render('detalle')
    },**/

    create: (req, res, next) => {

        res.render('create');

    },

    createPost: (req, res, next)=>{
         console.log(req);
        let nuevoProducto = {
            id: req.body.codigo,
            name: req.body.nombre,
            price:req.body.precio,
            especification: req.body.descripcion,
            img: '/images/imagenesProductos/'+req.files[0].filename,
            stock: req.body.cantidad,
            category:'',
            brand:'', 
        };

        archivoProductos = generateData.readJson();

        if(archivoProductos.length == 0){

            archivoProductos.push(nuevoProducto);
            generateData.writeJson(archivoProductos);
        
        }
        else{
            
            let resultado = false;
            for(var i = 0; i< archivoProductos.length; i++){
                 if(req.body.codigo == archivoProductos[i].id){
                      resultado = true;
                 }
            
            }

            if(resultado){
                console.log('ya existe');

            }else{
                archivoProductos.push(nuevoProducto);
                generateData.writeJson(archivoProductos);
            }
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

        productos = this.leerJSON();
        let id = req.params.id;
        productoAMostrar = productos.filter( function (productos) {
            return req.params.id == productos.id;
        });
        res.render('productos/:id/edit', productoAMostrar);

    },

    editPut: (req, res) => {

        let productoEditado = {
            id: req.params.id,
            codigo: req.body.codigo,
            name: req.body.nombre,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion
        };
        archivoProductos = this.leerJSON();
        let num = 0;
        for( i=0; i < archivoProductos.length; i++){
            if (archivoProductos[i].id == req.params.id)
                num = i;
        }
        archivoProductos[num] = productoEditado;
        this.escribirArchivo(archivoProductos);
        res.redirect('/productos');

    },

    borrar: (req,res) => {

        archivoProductos = generateData.writeJson;
        generateData.writeJson(generateData.deleteID(req,archivoProductos));
        res.redirect('/productos');
    }

}

module.exports = productosController;
