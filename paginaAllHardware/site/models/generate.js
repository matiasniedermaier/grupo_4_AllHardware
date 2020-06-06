const fs = require('fs');
const path = require('path');
const fileData= path.resolve(__dirname, '../data/productos.json');
//const fileData = path.join(__dirname, '../data/productos.json');
let generate={
    
    readJson:function(){
    
        if(!fs.existsSync(fileData)){
            fs.writeFileSync(fileData, '');
        }
        let productosJSON=fs.readFileSync(fileData, {encoding :'utf-8'});
        let arraysProductoJS= productosJSON.length == 0 ? []: JSON.parse(productosJSON);
        return arraysProductoJS;
    },
    
    writeJson: function(arraysProductoJS){
        let productosJSON= JSON.stringify(arraysProductoJS, null, ' ');
        fs.writeFileSync(fileData, productosJSON);
     },  

    deleteID : function(req,archivoProductos){

        let searchProducts = archivoProductos.filter( function (products) {
            return req.params.id != products.id;
        });
        return  searchProducts;
    }
}

module.exports= generate;

