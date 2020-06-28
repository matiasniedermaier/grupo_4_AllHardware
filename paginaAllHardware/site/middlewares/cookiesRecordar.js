function recordar (req, res, next){
 if(req.cookies.recordar){
     req.cookies.userId = req.session.id;
 }
 next();
}
module.exports = recordar;
