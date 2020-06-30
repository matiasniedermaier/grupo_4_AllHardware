function recordar (req, res, next){

 res.locals.logueado = false;

 if(req.cookies.timeLogin != undefined && req.session.logueado == undefined) {
  
    req.session.logueado = req.cookies.timeLogin;
    res.locals.logueado = req.session.logueado;
 }

 next();
}
module.exports = recordar;
