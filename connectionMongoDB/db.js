
const mongoose = require('mongoose')
// const MONGODB_URI = require('./.env')
const dotenv = require('dotenv')

//load env configuration
dotenv.config();

// established the connection with mongo db
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
        });
        console.log("MongoDB connected")
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB