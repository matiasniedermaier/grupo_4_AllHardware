const path = require('path');
module.exports = {
    validacionImg: (req, res, next) => {
          if(path.extname(file.originalname != 'jpg')){
              res.render('create', {msj:'tiene que ser una imagen jpg'});

          }
        next();
          
    }
}