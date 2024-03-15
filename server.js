const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/Mongodb')
const ImportData = require('./DataImport')
const ProductRoute = require('./Routes/ProductRoute')
const userRoutes = require('./Routes/UserRoutes')
const orderRouter = require ('./Routes/orderRoutes');
const sera = require('./models/ProductsModel')
const ProductsModel = require('./models/ProductsModel')
//connexion a mongo
dotenv.config()
connectDb()

const app = new express()

app.use(express.json())

//API
app.use("/api/import" ,ImportData)


app.use("/api/products"  , ProductRoute)

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Define API endpoints
app.get('/api/stats', async (req, res) => {
  try {
      const totalCount = await ProductsModel.countDocuments();
      // You can perform other queries/aggregations as needed
      res.json({ totalCount });
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
  }
});


const PORT = process.env.PORT || 1000

app.listen(PORT ,()=>{
    console.log(`localhost:${PORT}`)
})