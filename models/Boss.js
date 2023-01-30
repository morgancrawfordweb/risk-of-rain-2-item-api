const mongoose = require("mongoose");

const BossSchema = new mongoose.Schema({
  BossName: { type: String, unique: true },
  health:{type: Number},
  damage:{type: Number},
  speed:{type: Number},
  armor:{type: Number},
  teleporterEvent:{type:Boolean}
});

module.exports = mongoose.model("Boss", BossSchema);