const generateData = require('../models/generate');
const db = require('../database/models');
const { Op } =require('sequelize')

let productosController = {
    
    productos: (req, res, next) => {
    
        if(req.query.search) {

            db.Product.findAll({
                where : {
                    name : {
                        [Op.like] : '%' + req.query.search + '%'
                    }
                },
                order : [
                    ['name', 'ASC']
                ]
            })
                .then( products => {
                    return res.render('productos', { productos: products });
                })                

        } else {

           db.Product.findAll()
            .then( products => {
                return res.render('productos', { productos: products });
            });  

        }
    },

    create: async (req, res, next) => {

        let promiseCategory = await db.Category.findAll();
        let promiseBrand = await db.Brand.findAll();

        Promise.all( [promiseCategory, promiseBrand] )
            .then( ( [Category, Brand] ) => {
                res.render('create', {Category, Brand});
            }); 

    },

    createPost: (req, res, next)=>{
        
        console.log(req.file)

        if(req.file) {
            let avatar = '/images/imagenesProductos/'+ req.file.filename;
        }

        db.Product.create({
            name: req.body.name,
            price:req.body.price,
            stock: req.body.stock,
            especification: req.body.especification,
            img: '/images/imagenesProductos/' + req.file.filename,
            id_category: req.body.category,
            id_brand: req.body.brand
        });

        res.redirect('/productos');

    },

    id: (req, res) => {

        db.Product.findByPk(req.params.id)
            .then( product => {
                res.render('detalle',{productosMostrar:product});
            });
    },

    edit: (req, res) => {

        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then( product => {
            res.render('edit',{productosMostrar:product});
        });

    },

    editPut: (req, res) => {
      
        if (req.files != 'undefined'){
            db.Product.update({
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price,
                especification: req.body.especification,
                img: '/images/imagenesProductos/'+ req.file.filename
            },{
                where: {
                    id: req.params.id
                }
            });
        } else {
            db.Product.update({
                name: req.body.name,
                stock: req.body.stock,
                price: req.body.price,
                especification: req.body.especification
            },{
                where: {
                    id: req.params.id
                }
            });
        }
            
        res.redirect('/productos');

    },

    borrar: (req,res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/productos');
        
    },
 
    buscar: (req, res)=>{
        console.log(req.query.search)
        if (req.query.search) {
            
        
      db.Product.findAll({
        where: { 
            name: {
           [Op.like]: "%" + req.query.search + "%"
        }
    } 
    }).then( productos => {
        
        res.render('productos')
    });
}
}
}

module.exports = productosController;
