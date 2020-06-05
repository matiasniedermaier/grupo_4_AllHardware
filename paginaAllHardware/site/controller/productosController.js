const fs = require('fs');
const path = require('path');
const multer=require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/../../public/images/imagenesProducto');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
   
  var upload = multer({ storage: storage })

let productosController = {

    leerJSON:function(){

        if(!fs.existsSync(path.resolve(__dirname, '../data/productos.json'))){
            fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), '');
        }
        let productosJSON=fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), {encoding :'utf-8'});
        let arraysProductoJS= productosJSON.length == 0 ? []: JSON.parse(productosJSON);
        return arraysProductoJS;
    },

    escribirArchivo: function(arraysProductoJS){
        let productosJSON= JSON.stringify(arraysProductoJS, null, ' ');
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosJSON);
     },

    productos: (req, res, next) => {
       
        let arraysProductos= this.leerJSON();
      
        res.render('productos', { productos: arraysProductos })
    },

    create: (req, res, next) => {

        res.render('create');

    },

    createPost: (req, res, next)=>{

        let nuevoProducto = {
            codigo: req.body.codigo,
            name: req.body.nombre,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion
        };

        let archivoProductos = this.productoJSON();
        var productos; 
        if(archivoProductos == ""){
            productos = [];
            productos.push(nuevoProducto);
            let productosJSON = JSON.stringify(productos);
            
        }
        else{
            let resultado = false;
            productos= JSON.parse(archivoProductos);
            for(var i = 0; i< productos.length; i++){
                 if(req.body.codigo == productos.id){
                      resultado = true;
                 }
            
            }

            if(resultado){
                console.log('ya existe');

            }else{
                productos.push(nuevoProducto);
                this.escribirArchivo(productos);
            }
        }

        res.redirect('/productos');

    },

    id: (req, res) => {

        productos = this.leerJSON();
        let productoAMostrar = productos.filter( function (productos) {
            return req.params.id == productos.id;
        });
        res.send(productoAMostrar);

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

        archivoProductos = this.leerJSON();
        let productoBorrado = productos.filter( function (productos) {
            return req.params.id != productos.id;
        });
        this.escribirArchivo(productoBorrado);
        res.redirect('/productos');

    }

}

module.exports = productosController;
