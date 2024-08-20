//this file is resposible for connecting to the database.
const mongoose = require('mongoose')//importing mongoose

//const mongoURL = 'mongodb://localhost:27017/hotels'//hotels is the name of the database saved in mongodb & definiing the url.
const mongoURL = 'mongodb+srv://Aman2626:qwertyuiop@hotels.x6itr.mongodb.net/'//connected to atlas
//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db = mongoose.connection;//set up default connection


//defining event listeners for db
db.on('connected',()=>{
    console.log("database connected seccessfully");
})
db.on('error',()=>{
    console.log("error in connecting to database"); 
})
db.on('disconnected',()=>{
    console.log("database disconnected");
})
//export db
module.exports = db;