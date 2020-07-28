const users = require('../models/generate');
const db = require('../database/models');

function recordar (req, res, next){

   if(req.cookies.user && !req.session.logueado) {

      db.User.findByPk(req.cookies.user)
         .then( user => {
            req.session.logueado = true;
            req.session.user = user.id;
            res.locals.logeado = true;
            res.locals.user = user.id;
         })
    
   }

 next();
 
}
module.exports = recordar;
