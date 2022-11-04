const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: { type: String, unique: true },
  rarity:{type:String},
  color:{type:String},
  description:{type:String},
  cooldown:{type:Number},
  stackType:{type:String}
});

module.exports = mongoose.model("Item", ItemSchema);