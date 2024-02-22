const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/Mongodb')
const test = require('./data/Products')
const ImportData = require('./DataImport')
const ProductRoute = require('./Routes/ProductRoute')


//connexion a mongo
dotenv.config()
connectDb()

const app = new express()


app.use("/api/import" ,ImportData)

app.use("/api/products"  , ProductRoute)


const PORT = process.env.PORT || 1000

app.listen(PORT ,()=>{
    console.log(`localhost:${PORT}`)
})