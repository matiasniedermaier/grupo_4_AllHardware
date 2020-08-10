const generate = require('../models/generate');

let adminMiddleware = (req, res, next) => {
    
    if(req.session.admin) {
        
    }
    
};

module.exports = adminMiddleware;