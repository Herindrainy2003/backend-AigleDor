const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/Mongodb')
const ImportData = require('./DataImport')
const ProductRoute = require('./Routes/ProductRoute')
const userRoutes = require('./Routes/UserRoutes')

//connexion a mongo
dotenv.config()
connectDb()

const app = new express()

//API
app.use("/api/import" ,ImportData)

app.use("/api/products"  , ProductRoute)

app.use("/api/users", userRoutes);


const PORT = process.env.PORT || 1000

app.listen(PORT ,()=>{
    console.log(`localhost:${PORT}`)
})