function recordar (req, res, next){
 if(req.cookies.recordar){
     req.session.user.id = req.cookies.recordar;
 }
 next();
}
module.exports = recordar;
