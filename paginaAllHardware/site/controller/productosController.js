const fs=require('fs');
const path=require('path');

let productosController = {

    'productos': (req, res, next) => {
       
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'), { encoding: 'utf-8' }));
      
        res.render('productos', { productos: productos })
    },

    'create': (req, res, next) => {

        res.render('create')
    },

    'createPost': (req, res, next)=>{

        console.log(req.body);

        let nuevoProducto = {
            codigo: req.body.codigo,
            name: req.body.nombre,
            cantidad: req.body.cantidad,
            imagen: req.body.imagen,
            descripcion: req.body.descripcion,
        };

        console.log(nuevoProducto);

        let archivoProductos = fs.readFileSync (path.resolve(__dirname, '../data/products.json'), {encoding:'utf-8'});
        var productos; 
        if(archivoProductos == ""){
            productos = [];
            productos.push(nuevoProducto);
            let productosJSON = JSON.stringify(productos);
            fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), productosJSON);
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
                fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), productosJSON);
            }

        }

    res.redirect('/productos');
    }

}

module.exports = productosController;
