const mongoose = require("mongoose");

const ShrineSchema = new mongoose.Schema({
  name:{type:String},
  cost:{type:String},
  spawnChance:{type:String},
  description:{type:Number},
  lore:{type:String},
  possibleItems:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items"
  }
});

module.exports = mongoose.model("Shrine", ShrineSchema);