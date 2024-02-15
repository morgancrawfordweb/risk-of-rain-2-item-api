const Shrine = require('../models/Shrine');
const Item = require('../models/Item');


module.exports = {
  getAllShrines: async(req,res) =>{
    try{
      const shrines = await Shrine.find()
      res.render('shrines.ejs',{shrines: shrines})
    }catch(err){
      console.log(err)
    }
  },
  feelingLuckyPunk:async(req,res)=>{
      try{

        const shrineWorked = Math.random()<0.5;
        // let item=null;



        //if the shrine worked, this is function will fire
        if(shrineWorked){
          const rarityChance = {
            common:0.8,
            uncommon:0.18,
            legendary:0.02,
          };
        
        const random = Math.random()
        if(random<rarityChance.common){
          const items = await Item.find({rarity:"Common"})
          item = getRandomItem(items)
        }else if(random<rarityChance.uncommon){
          const items = await Item.find({rarity:"Uncommon"})
          item = getRandomItem(items)
        }else if(random<rarityChance.legendary){
          const items = await Item.find({rarity:"Legendary"})
          item = getRandomItem(items)
        }
        function getRandomItem(items) {
          if (items.length === 0) {
            return null;
          }
          const randomIndex = Math.floor(Math.random() * items.length);
          return items[randomIndex];
        }


        res.render('shrines.ejs', {shrineWorked: items})
    }catch(err){
        console.log(err)
    }
  }
    // getCommonItems: async(req,res) =>{
    //   try{
    //     var sortedItems = {itemName: 1}
    //     const items = await Item.find({rarity:"Common"}).sort(sortedItems)
        
    //     res.render('items.ejs',{items: items})
        
    //   }catch(err){
    //     console.log(err)
    //   }
    // }
}


