let guestMiddleware = (req, res, next) => {

    console.log(req.session.logueado)

    if (req.session.logueado) {
        
        return res.redirect('/users/profile');
        
    }

    next();
    
};

module.exports = guestMiddleware;