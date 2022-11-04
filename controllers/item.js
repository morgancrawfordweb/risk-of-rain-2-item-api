const Item = require('../models/Item');


module.exports = {
    getAllItems: async(req,res) =>{
      try{
        const items = await Item.find()
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getCommonItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: req.r})
        if(item=="Common"){
        res.render('items.ejs',{item: item})
        }
      }catch(err){
        console.log(err)
      }
    },
    getUncommonItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Uncommon"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    getLegendaryItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Legendary"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    getEquipmentItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Equipment"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    getVoidItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Void"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    getLunarItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Lunar"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    getBossItems: async(req,res) =>{
      try{
        const item = await Item.find({rarity: "Boss"})
        res.render('items.ejs',{item: item})
      }catch(err){
        console.log(err)
      }
    },
    // getSpecificItems: async(req,res) =>{
    //   try{
    //     const item = await Item.find({name: itemName})
    //     if(item == itemName)
    //     res.render('items.ejs',{item: item})
    //   }catch(err){
    //     console.log(err)
    //   }
    // },
    
}

