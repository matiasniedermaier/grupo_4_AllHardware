const users = require('../models/generate');

function recordar (req, res, next){

 if(req.cookies.timeLogin != undefined && req.session.logueado == undefined) {

  let usuarios = users.readJsonUser();

   for( let i = 0; i < usuarios.length; i++) {

      if (usuarios[i].email == req.cookies.timeLogin) {
           req.session.logueado = usuarios[i];
      }
   }
    
 }

 next();
 
}
module.exports = recordar;
