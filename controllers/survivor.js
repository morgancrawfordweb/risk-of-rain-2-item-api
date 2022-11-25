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
//     getRangedSurvivors: async(req,res)=>{
//     try{
//         const survivors = await Survivor.find({type: "Ranged"})
//         const mulT = await Survivor.find({survivorName:"Mul-T"})
//         // res.render('survivors.ejs', {survivors: survivors, mulT: mulT})
//     }catch(err){
//         console.log(err)
//     }
//  },
//     getMeleeSurvivors: async(req,res) =>{
//         try{
//             const survivors = await Survivor.find({type: "Melee"})
//             res.render('survivors.ejs', {survivors: survivors})
//         }catch(err){
//             console.log(err)
//         }
//     },    
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

