const Survivor = require('../models/Survivor');
const Item = require('../models/Item');


module.exports = {
    getAllSurvivors: async (req, res)=>{
        try{
            const survivors = await Survivor.find()
            console.log(survivors)
            res.json(survivors)
        }catch(err){
            console.log(err)
        }
 },
    getRangedSurvivors: async(req,res)=>{
    try{
        const rangedSurvivor = await Survivor.find({type: "Ranged"})
        res.json(rangedSurvivor)
    }catch(err){
        console.log(err)
    }
 },
    getMeleeSurvivors: async(req,res) =>{
        try{
            const meleeSurvivor = await Survivor.find({type: "Melee"})
            res.json(meleeSurvivor)
        }catch(err){
            console.log(err)
        }
    },    
    getSpecificSurvivors: async(req,res) =>{
      try{
        const survivor = await Survivor.find({name: survivorName})
        if(survivor)
        res.json(survivor)
      }catch(err){
        console.log(err)
      }
    },
    getAllItems: async(req,res) =>{
      try{
        const items = await Item.find().lean().toObject()
        // const jsonItem = items.toObject()
        console.log(items)
        // res.render('items.ejs',{items: items})
        res.json(items)
      }catch(err){
        console.log(err)
      }
    },
    getCommonItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Common"})
          res.json(item)
          console.log(item)
        }catch(err){
          console.log(err)
        }
      },
      getUncommonItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Uncommon"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getLegendaryItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Legendary"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getEquipmentItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Equipment"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getVoidItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Void"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getLunarItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Lunar"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getBossItems: async(req,res) =>{
        try{
          const item = await Item.find({rarity: "Boss"})
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
      getSpecificItems: async(req,res) =>{
        try{
          const item = await Item.find({name: itemName})
          if(item === itemName)
          res.json(item)
        }catch(err){
          console.log(err)
        }
      },
    
    }