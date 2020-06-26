const generate = require('../models/generate');

let guestMiddleware = (req, res, next) => {
    console.log(req.session.id)
    if (req.session.id === undefined) {
        
        next();
    } else {
        //return res.redirect('/', {msg: 'Esta ruta es solo para usuarios'});
    }
};

module.exports = guestMiddleware;