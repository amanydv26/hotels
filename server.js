const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require('./db') //importing DB

app.get("/",(req,res)=>{
    res.send("helllo!!! welcome to our hotel use goto menu page for getting our menu ../menu ")
})
const Menuroute = require('./routes/Menuroutes')
app.use('/Menu',Menuroute);

const PersonRoutes = require('./routes/PeopleRoutes');
app.use('/person',PersonRoutes);

app.listen(3000,()=>{
    console.log("server is running")
});