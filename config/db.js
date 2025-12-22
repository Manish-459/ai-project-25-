
require("dotenv").config()
const mongoose=require("mongoose");
function connectDB(){
    console.log(process.env.MONGO_URI)
    const option={useNewUrlParser:true,useUnifiedTopology:true};
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB connected")
    })
    .catch((e)=>{
        console.log("DB not connected",e.message)
    })
}
module.exports = connectDB;