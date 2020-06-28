const generate = require('../models/generate');

let guestMiddleware = (req, res, next) => {
    if (req.session.id) {
        res.redirect('/profile');
    }
    next()
};

module.exports = guestMiddleware;