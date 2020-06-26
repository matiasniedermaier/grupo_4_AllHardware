const generate = require('../models/generate');

let userMiddleware = (req, res, next) => {
    if(req.session.id != undefined) {
        next();
    } else {
        return res.redirect('/', {msg: 'Esta ruta es para invitados'});
    }
};

module.exports = userMiddleware;