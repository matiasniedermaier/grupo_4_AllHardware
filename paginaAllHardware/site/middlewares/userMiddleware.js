const generate = require('../models/generate');

let userMiddleware = (req, res, next) => {
    console.log(req.session.logueado)
    console.log(req.session.user)
    if(!req.session.logueado) {

         res.redirect('users/login');
    }
    
    next();
};

module.exports = userMiddleware;