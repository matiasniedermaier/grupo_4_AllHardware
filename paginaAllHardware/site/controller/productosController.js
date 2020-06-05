const fs = require('fs');
const path = require('path');

let productosController = {

    productos: (req, res, next) => {
       
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), { encoding: 'utf-8' }));
      
        res.render('productos', { productos: productos })
    },

    detalle: (req,res)=>{
        res.render('detalle')
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

        let archivoProductos = fs.readFileSync (path.resolve(__dirname, '../data/productos.json'), {encoding:'utf-8'});
        var productos; 
        if(archivoProductos == ""){
            productos = [];
            productos.push(nuevoProducto);
            let productosJSON = JSON.stringify(productos);
            fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosJSON);
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
                let productosJSON=JSON.stringify(productos);
                fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosJSON);
            }
        }

        res.redirect('/productos');

    },

    id: (req, res) => {

        productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), { encoding: 'utf-8' }));
        let productoAMostrar = productos.filter( function (productos) {
            return req.params.id == productos.id;
        });
        res.send(productoAMostrar);

    },

    edit: (req, res) => {

        productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/productos.json'), { encoding: 'utf-8' }));
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
        archivoProductos = JSON.parse(fs.readFileSync (path.resolve(__dirname, '../data/productos.json'), {encoding:'utf-8'}));
        let num = 0;
        for( i=0; i < archivoProductos.length; i++){
            if (archivoProductos[i].id == req.params.id)
                num = i;
        }
        archivoProductos[num] = productoEditado;
        let productosJSON = JSON.stringify(archivoProductos);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosJSON);
        res.redirect('/productos');

    },

    borrar: (req,res) => {

        archivoProductos = JSON.parse(fs.readFileSync (path.resolve(__dirname, '../data/productos.json'), {encoding:'utf-8'}));
        let productoBorrado = productos.filter( function (productos) {
            return req.params.id != productos.id;
        });
        productosJSON = JSON.stringify(productoBorrado);
        fs.writeFileSync(path.resolve(__dirname, '../data/productos.json'), productosJSON);
        res.redirect('/productos');

    }

}

module.exports = productosController;
