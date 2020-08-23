const generateData = require('../models/generate');
const db = require('../database/models');
const { Op } =require('sequelize');
const {check, validationResult, body} =  require('express-validator');

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

           db.Product.findAll({
            order : [
                ['name', 'ASC']
            ]
           })
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
                return res.render('create', {Category, Brand});
            }); 

    },

    createPost: async (req, res, next)=>{
        
        let errors = validationResult(req);

        if(errors.isEmpty() ) {

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

        } else {

            let promiseCategory = await db.Category.findAll();
            let promiseBrand = await db.Brand.findAll();
    
            Promise.all( [promiseCategory, promiseBrand] )
                .then( ( [Category, Brand] ) => {
                    res.render('create', {Category, Brand, errors : errors.mapped(),body : {}});
                }); 

        }

    },

    id: (req, res) => {

        db.Product.findByPk(req.params.id)
            .then( product => {
                res.render('detalle',{productosMostrar:product});
            });
    },

    edit: async (req, res) => {

        let promiseCategory = await db.Category.findAll();
        let promiseBrand = await db.Brand.findAll();
        let promiseProduct = await db.Product.findByPk(req.params.id);

        Promise.all( [promiseCategory, promiseBrand, promiseProduct] )
            .then( ( [Category, Brand, Product] ) => {
                res.render('edit', {Category, Brand, Product});
            });

    },

    editPut: async (req, res) => {

        let errors = validationResult(req);

        //console.log('hollaaaaa' ,req.file.filename)

        if(errors.isEmpty() ) {
            
            if (req.file){
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

        } else {

            let promiseCategory = await db.Category.findAll();
            let promiseBrand = await db.Brand.findAll();
            let promiseProduct = await db.Product.findByPk(req.params.id);

            Promise.all( [promiseCategory, promiseBrand, promiseProduct] )
            .then( ( [Category, Brand, Product] ) => {
                res.render('edit', {Category, Brand, Product, errors : errors.mapped(),body : {}});
            });

        }
    },

    borrar: (req,res) => {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/productos');
        
    }

}

module.exports = productosController;
