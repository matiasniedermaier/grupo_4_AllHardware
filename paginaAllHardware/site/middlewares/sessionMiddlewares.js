function session (req, res, next){

   res.locals.logueado = false;
   //console.log(req.session.logueado);
    if(req.session.logueado) {
       res.locals.logueado = true;
       res.locals.user = req.session.user;
    }
   
    next();
}
   module.exports = session;