const generate = require('../models/generate');

let adminMiddleware = (req, res, next) => {
    
    if(!req.session.logueado) {

         res.redirect('/users/login');
    }
    
    next();
};

module.exports = adminMiddleware;