const users = require('../models/generate');

function recordar (req, res, next){

 if(req.cookies.timeLogin != undefined && req.session.logueado == undefined) {

   for( let i = 0; i < users.length; i++) {

      if (users[i].email == req.cookies.timeLogin) {
           req.session.logueado = users[i];
      }
   }
    
 }

 next();
 
}
module.exports = recordar;
