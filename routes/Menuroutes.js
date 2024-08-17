const express = require('express')
const router = express.Router();

const Menu = require('./../models/menu');


router.get('/',async (req,res)=>{
    try{
        const menuData = await Menu.find();
        console.log('menu data fetched from the server');
        res.status(200).json(menuData);
    }catch(err){
        console.log(err)
        res.status(500).json({error:'server problem'});
    }
})
router.post('/',async(req,res)=>{
    try{
        const fooddata = req.body
        const newFood = new Menu(fooddata);

        const response = await newFood.save()
        console.log('data uploaded');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'server problem'});
    }
})



router.get('/:taste',async (req,res)=>{
    try{
        const TasteFood = req.params.taste;
        const FoodList =await Menu.find({taste:TasteFood});
        console.log("good to know your choice");
        res.status(200).json(FoodList);
    }catch(err){
        console.log(err);
        res.status(404).json({error:"data not found"});
    }
})
router.put('/:id', (req,res)=>{
    try{
    const FoodId = req.params.id;
    const Foodupdate = req.body;
    const response = Menu.findByIdAndUpdate(FoodId,Foodupdate,{
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

module.exports = router