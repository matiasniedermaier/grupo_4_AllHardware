const generate = require('../models/generate');

let userMiddleware = (req, res, next) => {
    if(!req.session.id) {
        res.redirect('/login');
    }
    next();
};

module.exports = userMiddleware;