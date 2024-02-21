const express = require('express');
const ProductsModel = require('../models/ProductsModel');

const ProductRoute = express.Router()

ProductRoute.get('/' , (req, res)=>{
    ProductsModel.find({})
        .then((result)=>{
            res.json(result)
        })
        .catch(e=>{
            res.status(201).json('error')
        })
    
});

ProductRoute.get('/:id' , (req, res)=>{
    ProductsModel.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        })
        .catch(e=>{
            res.status(201).json('erro')
        })
    
});

module.exports = ProductRoute;