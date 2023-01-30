const mongoose = require("mongoose");

const MonstersSchema = new mongoose.Schema({
  enemyName: { type: String, unique: true },
  health:{type: Number},
  damage:{type: Number},
  speed:{type: Number},
  armor:{type: Number},
  survivorsOfTheVoid:{type:Boolean},
  environments:[{
    text:String,
    ref:"Environments"
  }]
});

module.exports = mongoose.model("Monsters", MonstersSchema);