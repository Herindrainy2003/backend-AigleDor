const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema  = mongoose.Schema({
    name : {
        type : String ,
        required : true 
    } ,
    rating:{
        type : Number ,
        required : true ,
    },
    comment:{
        type : Number ,
        required : true ,
    },
    user:{
        type : mongoose.Schema.Types.ObjectId ,
        required : true ,
        ref:"User"
    },
})


const Products = new Schema({
    name : {
        type : String ,
        required : true 
    } ,
    image : {
        type : String ,
        required : true
    } ,
    description:{
        type : String ,
        required :true
    },
    reviews : [reviewSchema] ,
    rating:{
        type : Number ,
        required : true ,
        default :0
    },
    numreviews:{
        type : Number ,
        required : true ,
        default :0
    },
    price:{
        type : Number ,
        required : true ,
        default :0
    },
    countInstock:{
        type : Number ,
        required : true ,
        default :0
    }
} , {
        timestamps : true
    }
)

module.exports = mongoose.model('Products' , Products)