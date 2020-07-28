const users = require('../models/generate');
const db = require('../database/models');

let recordar = async (req, res, next) => {

   //console.log(req.cookies.user)

   if(req.cookies.user && !req.session.logueado) {

      console.log(req.cookies.user, 'hola')

      let user = await db.User.findByPk(req.cookies.user)

      req.session.logueado = true;
      req.session.user = user.id;
      res.locals.logeado = true;
      res.locals.user = user.id;
    
   }

   next();
 
}
module.exports = recordar;
