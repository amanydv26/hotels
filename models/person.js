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
    },
    username:{
        require:true,
        type:String
    },
    Password:{
        require:true,
        type:String
    }

})
personSchema.pre('save',async function(next){
    const Person = this;
    if(Person.isModified('Password')) return next();

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Person.Password,salt);
        Person.Password = hashedPassword;
    }catch(err){
        return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePsssword){
    try{
        const Match = await bcrypt.compare(candidatePsssword,this.Password);
        return Match;
    }catch(err){
        throw err;
    }
}

//create person model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;
