function session (req, res, next){

    res.locals.logueado = false;
   //console.log(req.session.logueado);
    if(req.session.logueado) {
     
       res.locals.logueado = req.session.logueado;
    }
   
    next();
}
   module.exports = session;