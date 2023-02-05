const mongoose = require("mongoose");

const SurvivorSchema = new mongoose.Schema({
  survivorName: { type: String, unique: true },
  health:{type: Number},
  healthRegen:{type: Number},
  damage:{type: Number},
  speed:{type: Number},
  armor:{type: Number},
  level:{type: Number},
  type:{type: String},
  survivorImage:{type:String}
});

module.exports = mongoose.model("Survivor", SurvivorSchema);