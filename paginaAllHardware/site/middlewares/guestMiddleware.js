const generate = require('../models/generate');

let guestMiddleware = (req, res, next) => {

    if (req.session.logueado) {
        
        res.redirect('/profile');
        
    }

    next();

    
};

module.exports = guestMiddleware;