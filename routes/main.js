const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
const itemController = require("../controllers/item");
const survivorController = require("../controllers/survivor");

//Future build below
// const monsterController = require("../controllers/monster");
// const environmentController = require("../controllers/environment");

//Main Routes - simplified for now
router.get("/", indexController.getIndex);


// router.get("/everything", indexController.getEverything);

//This router will get everything item related
router.get("/everyItem", itemController.getAllItems);
router.get("/commonItems", itemController.getCommonItems);
router.get("/uncommonItems", itemController.getUncommonItems);
router.get("/legendaryItems", itemController.getLegendaryItems);
router.get("/equipmentItems", itemController.getEquipmentItems);
router.get("/voidItems", itemController.getVoidItems);
router.get("/lunarItems", itemController.getLunarItems);
router.get("/bossItems", itemController.getBossItems);
router.get("/:itemName", itemController.getSpecificItems);


//This router will get everything survivor related
router.get("/survivor/everySurvivor", survivorController.getAllSurvivors);
router.get("/survivor/rangedSurvivors", survivorController.getRangedSurvivors);
router.get("/survivor/meleeSurvivors", survivorController.getMeleeSurvivors);
// router.get(`/survivors/:name`, survivorController.getSpecificSurvivors);


module.exports = router;
