const Survivor = require('../models/Survivor');
const Item = require('../models/Item');


module.exports = {
    getAllSurvivors: async (req, res)=>{
        try{
            const survivors = await Survivor.find().lean()

            res.json(survivors)
        }catch(err){
            console.log(err)
        }
 },
//     getRangedSurvivors: async(req,res)=>{
//     try{
//         const rangedSurvivors = await Survivor.find({type: "Ranged"}).lean()
       
//         res.json(rangedSurvivors)
        
//     }catch(err){
//         console.log(err)
//     }
//  },
//     getMeleeSurvivors: async(req,res) =>{
//         try{
//             const meleeSurvivors = await Survivor.find({type: "Melee"}).lean()
//             res.json(meleeSurvivors)
//         }catch(err){
//             console.log(err)
//         }
//     },    
//     getSpecificSurvivors: async(req,res) =>{
//       try{
//         const survivors = await Survivor.find().lean()
//         if(survivors)
//         res.json(survivors)
//       }catch(err){
//         console.log(err)
//       }
//     },
    getAllItems: async(req,res) =>{
      try{
        const items = await Item.find().lean()
        console.log(items)
        res.json(items)
      }catch(err){
        console.log(err)
      }
    },
    getCommonItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: 'Common'}).lean()
          res.json(item)
          console.log(item)
          
        }catch(err){
          console.log(err)
        }
      },
      getUncommonItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Uncommon"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getLegendaryItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Legendary"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getEquipmentItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Equipment"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getVoidItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Void"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getLunarItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Lunar"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getBossItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Boss"}).lean()
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getSpecificItems: async(req,res) =>{
        try{
  
          // need to figure out the translation between controller and actual query in the URL
          const itemName = req.params.itemName.toLowerCase()
          const items = await Item.find({itemName:itemName})
  
          if(items){
            res.json(items.lean())
        }}catch(err){
          console.log(err)
        }
      }
    
    }