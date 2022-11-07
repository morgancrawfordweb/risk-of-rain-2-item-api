const Survivor = require('../models/Survivor');


module.exports = {
    getAllSurvivors: async (req, res)=>{
        try{
            const survivors = await Survivor.find()
            res.render('survivors.ejs', {survivors: survivors})
        }catch(err){
            console.log(err)
        }
 },
    getRangedSurvivors: async(req,res)=>{
    try{
        const rangedSurvivors = await Survivor.find({type: "Ranged"})
        res.render('survivors.ejs', {rangedSurvivors: rangedSurvivors})
    }catch(err){
        console.log(err)
    }
 },
    getMeleeSurvivors: async(req,res) =>{
        try{
            const meleeSurvivors = await Survivor.find({type: "Melee"})
            res.render('survivors.ejs', {meleeSurvivors: meleeSurvivors})
        }catch(err){
            console.log(err)
        }
    },    
    // getSpecificSurvivors: async(req,res) =>{
    //     try{
    //       const survivor = await Survivor.find({name: survivor})
    //       const jsonRes = res.toJSON(survivor)
    //       if(survivorName == survivor)
    //       res.render('survivors.ejs',{survivor: survivor})
    //     }catch(err){
    //       console.log(err)
    //     }
    //   },
    

}

