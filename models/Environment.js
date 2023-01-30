const mongoose = require("mongoose");

const EnvironmentSchema = new mongoose.Schema({
  environmentName:{type:String},
  stageNumber:{type:Number},
  description:{type:String},
  monstersSpawned:[{
      text:String,
      ref:'Monsters'
  }],
  bossSpawned:{type:String},
  survivorsOfTheVoid:{type:Boolean},
  hiddenRealm:{type:Boolean},
});

module.exports = mongoose.model("Environment", EnvironmentSchema);