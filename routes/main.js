const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
const itemController = require("../controllers/item");
const survivorController = require("../controllers/survivor");
const shrineController = require("../controllers/shrine");
// const environmentController = require("../controllers/environment")
// const monsterController = require("../controllers/monster");


//Future build below

//Main Routes - simplified for now
//Will also get the shring of chance mini-game
router.get("/", indexController.getIndex);


//This router will get everything item related
router.get("/everyItem", itemController.getAllItems);
router.get("/commonItems", itemController.getCommonItems);
router.get("/uncommonItems", itemController.getUncommonItems);
router.get("/legendaryItems", itemController.getLegendaryItems);
router.get("/equipmentItems", itemController.getEquipmentItems);
router.get("/voidItems", itemController.getVoidItems);
router.get("/lunarItems", itemController.getLunarItems);
router.get("/bossItems", itemController.getBossItems);

// router.get("/:itemName", itemController.getSpecificItems);


//This router will get everything survivor related
router.get("/survivor/everySurvivor", survivorController.getAllSurvivors);
router.get("/survivor/rangedSurvivors", survivorController.getRangedSurvivors);
router.get("/survivor/meleeSurvivors", survivorController.getMeleeSurvivors);
// router.get(`/survivors/:name`, survivorController.getSpecificSurvivors);


//Environment routes 
// router.get("/environment/allEnvironment"), environmentController.getAllEnvironments);
// router.get("/environment/firstEnvironment"), environmentController.getFirstEnvironments);
// router.get("/environment/secondEnvironment"), environmentController.getSecondEnvironments);
// router.get("/environment/thirdEnvironment"), environmentController.getThirdEnvironments);
// router.get("/environment/fourthEnvironment"), environmentController.getFourthEnvironments);
// router.get("/environment/fifthEnvironment"), environmentController.getFifthEnvironments);

//Shrine Routes
router.get("/shrines", shrineController.getAllShrines)
router.get("/shrines/feelingLucky", shrineController.feelingLuckyPunk)



module.exports = router;
