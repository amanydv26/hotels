const express = require('express')
const router = express.Router();

const Person = require('./../models/person')

router.post('/',async (req,res)=>{
    try{
    const data = req.body
    const newPerson = new Person(data);

   const response = await newPerson.save();
   console.log('data saved');
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'something went wrong'});
    }
})
router.get('/',async(req,res)=>{
    try{
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'something went wrong'});
    }
})

router.get('/:occupation',async(req,res)=>{
    //console.log(req.params.occupation);
     try{
        const work = req.params.occupation;
        //console.log(work);
        if(work == 'chef'||work == "waiter"||work == "cook"){
         const dataWorker =await Person.find({occupation:work})
         console.log("here you know")
         res.status(200).json(dataWorker)
        }else
        {
         res.status(400).json({error:"invalid occuppation"})
        }
     }catch(err){
         console.log(err);
         res.status(404).json({error:"data not found"});
     }
 })




//UPDATING 

router.put('/:id',async (req,res)=>{
    try{
    const UserId = req.params.id;
    const Updation = req.body;
    const response = await Person.findByIdAndUpdate(UserId , Updation ,{
        new:true,
        runValidators:true
    })
    console.log("updation done")
    res.status(200).json(response);
    if(!response){
        return res.status(404).json({error:"data not found"});
    }
    }catch(err){
        console.log(err);
        res.status(404).json({error:"data not found"});
    }
})

router.delete('/:id',async(req,res)=>{
        try{
        const UserId = req.params.id;
        console.log(UserId);
        console.log(await Person.findById(UserId,'name'))
        const response = await Person.findByIdAndDelete(UserId);   
        res.status(200).json(response)
        if(!response){
            return res.status(400).json({error:"data found but error "})
        }
        }catch(err){
            console.log(err);
            res.status(404).json({error:"data not found"});
        }
})

module.exports = router;
