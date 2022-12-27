const Item = require('../models/Item');


module.exports = {
    getAllItems: async(req,res) =>{
      try{
        const items = await Item.find().sort()
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getCommonItems: async(req,res) =>{
      try{
        var sortedItems = {itemName: 1}
        const items = await Item.find({rarity:"Common"}).sort(sortedItems)
        
        res.render('items.ejs',{items: items})
        
      }catch(err){
        console.log(err)
      }
    },
    getUncommonItems: async(req,res) =>{
      try{
        var sortedItems = {itemName: 1}
        const items = await Item.find({rarity: "Uncommon"}).sort(sortedItems)
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getLegendaryItems: async(req,res) =>{
      try{
        const items = await Item.find({rarity: "Legendary"})
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getEquipmentItems: async(req,res) =>{
      try{
        const items = await Item.find({rarity: "Equipment"})
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getVoidItems: async(req,res) =>{
      try{
        const items = await Item.find({rarity: "Void"})
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getLunarItems: async(req,res) =>{
      try{
        const items = await Item.find({rarity: "Lunar"})
        res.render('items.ejs',{items: items})
      }catch(err){
        console.log(err)
      }
    },
    getBossItems: async(req,res) =>{
      try{
        const items = await Item.find({rarity: "Boss"})
        res.render('items.ejs',{items: items})
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
        res.render('items.ejs',{items: items})

      }}catch(err){
        console.log(err)
      }
    }
    
}


