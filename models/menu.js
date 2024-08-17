const mongoose = require('mongoose')
const MenuSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    taste:{
        type:String
    },
    sales:{
        type:Number
    }
})

const Menu = mongoose.model('Menu' , MenuSchema)
module.exports = Menu;