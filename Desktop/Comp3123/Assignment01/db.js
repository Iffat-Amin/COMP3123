const mongoose = require("mongoose");

const DB_CONNECTION_STRING="mongodb+srv://iffatnabila18:Omornabila17!@cluster0.1rznu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB_CONNECTION_STRING,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
    console.log("connected to MongoDB")
}).catch((err)=>{
    console.log("Error: ",err)
})

module.exports = connectDB;
