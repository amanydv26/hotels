const Passport = require('passport')
const Localstratergy = require('passport-local').Strategy;
const Person = require('./models/person');
const passport = require('passport');
Passport.use(new Localstratergy (async(USERNAME,Password,done)=>{
    //checking if the person is authorized or not
    try{
        const user = await Person.findOne({username:USERNAME});
        if(!user){
            return done(null,false,{message:"incorrect username"})
        }
        const IsPassword = user.comparePassword(Password) ;
        if(IsPassword){
            return done(null,user);
        }
        else{
            return done(null , false , {message:"incorrect password"});
        }
    }catch(error)
    {
        return done(error)
    }
}))


module.exports = Passport;