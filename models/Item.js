const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  rarity:{type:String},
  color:{type:String},
  description:{type:String},
  cooldown:{type:Number},
  stackType:{type:String},
  itemName: { type: String, unique: true },
});

module.exports = mongoose.model("Item", ItemSchema);