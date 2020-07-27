//const users = require('../models/generate');
const db = require('../database/models');
function recordar (req, res, next){

 if((req.cookies.timeLogin) && req.session.logueado == undefined) {

  //let usuarios = users.readJsonUser();

  db.User.findOne({
     where:{
        email : req.cookies.timeLogin
     }
  })
  .then(usuario => {
     req.session.logueado= true;
     req.session.user = usuario.id;
     console.log(req.session.user)
  })

   /*for( let i = 0; i < usuarios.length; i++) {

      if (usuarios[i].email == req.cookies.timeLogin) {
           req.session.users= usuarios[i].id;
           req.session.logueado = true;
      }
   }*/
    
 }

 next();
 
}
module.exports = recordar;
