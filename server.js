const express = require('express')
const app = express()
const passport =require('./auth')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const db = require('./db') //importing DB
const Authen = passport.authenticate('local',{session:false})
app.get("/",(req,res)=>{
    res.send("Helllo!!! welcome to our hotel use goto menu page for getting our menu ../menu ")
})

app.use(passport.initialize());

const Menuroute = require('./routes/Menuroutes')
app.use('/Menu',Menuroute);

const PersonRoutes = require('./routes/PeopleRoutes');
app.use('/person',Authen,PersonRoutes);

app.listen(3000,()=>{
    console.log("server is running")
});