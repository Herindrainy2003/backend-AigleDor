const express =  require('express')
const User = require('./models/UserModel.js')
const users  = require('./data/User')
const products = require('./data/Products.js')
const Products = require('./models/ProductsModel.js')
const ImportData = express.Router()
const asyncHandler = require('express-async-handler')

ImportData.post("/user" ,
      asyncHandler(async(req , res)=>{
          await User.deleteMany();
          const importUser = await User.insertMany(users)
          res.send(importUser)
}))

ImportData.post("/products" , 
asyncHandler(
   async(req , res)=>{
      await Products.deleteMany();
      const importProducts = await Products.insertMany(products)
      res.send(importProducts)
   }
))
module.exports = ImportData