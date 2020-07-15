const generate = require('../models/generate');

let userMiddleware = (req, res, next) => {
    
    if(!req.session.logueado) {

         res.redirect('/users/login');
    }
    
    next();
};

module.exports = userMiddleware;