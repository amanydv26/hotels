const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    occupation:{
        type:String,
        enum:['chef','cook','waiter'],
        require:true
    }, 
    mobile:{
        type:Number,
        //require:true
        unique:true
    },
    salary:{
        type:Number
    }
})

//create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;
