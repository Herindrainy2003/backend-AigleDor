const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        const connection =  mongoose.connect(process.env.MONGO_URL);
        console.log('mongo connnecter')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb
