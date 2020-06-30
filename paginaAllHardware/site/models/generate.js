const fs = require('fs');
const path = require('path');
const fileData= path.resolve(__dirname, '../data/productos.json');
const fileDataUser = path.resolve(__dirname, '../data/usuarios.json');
const bcrypt = require('bcrypt');

let generate = {
    
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

    },

    readJsonUser:function(){
    
        if(!fs.existsSync(fileDataUser)){

            fs.writeFileSync(fileDataUser, '');

        }

        let userJSON=fs.readFileSync(fileDataUser, {encoding :'utf-8'});

        let arraysUserJS= userJSON.length == 0 ? []: JSON.parse(userJSON);

        return arraysUserJS;

    },
    
    writeJsonUser: function(arraysUserJS){

        let userJSON= JSON.stringify(arraysUserJS, null, ' ');

        fs.writeFileSync(fileDataUser, userJSON);

    },

    lastIDUser: function() {

        let array = this.readJsonUser();

        let lastID = 0;

        for( let i=0; i < array.length; i++) {

            if (lastID < array[i].id)
                lastID = array[i].id;

        }

        return lastID +1;
        
    },

    findUserEmail: function(value) {
        let users = this.readJsonUser();
        for( let i = 0; i < users.length; i++) {
            if (users[i].email == value) {
                return true;
            }
        }
        return false;
    },

   findUserPassword: function(value, { req }) {
        let users = this.readJsonUser();
        for( let i = 0; i < users.length; i++) {
            if(bcrypt.compareSync(value, users[i].password) && users[i].email == req.body.email){
                req.session.logueado = users[i].email;
                
                return true;
            }
        }
        return false;
    }
    

};

module.exports = generate;