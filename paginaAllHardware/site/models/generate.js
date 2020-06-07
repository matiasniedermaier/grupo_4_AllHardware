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
        console.log(archivoProductos)
        let searchProducts = archivoProductos.filter(function(products) {
            return req.params.id != products.id;
        });
        return  searchProducts;
    },

    lastID: function() {
        let array = this.readJson();
        let lastID = 0;
        for( let i=0; i < array.length; i++) {
            if (lastID < array[i].id)
                lastID = array[i].id;
        }
        return lastID +1;
    }
    
}

module.exports= generate;

