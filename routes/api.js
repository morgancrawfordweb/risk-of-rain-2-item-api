const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
const apiController = require("../controllers/api");

//Future build below
// const monsterController = require("../controllers/monster");
// const environmentController = require("../controllers/environment");

//Main Routes - simplified for now
router.get("/", indexController.getIndex);
// router.get("/everything", indexController.getEverything);

//This router will get everything item related
router.get("/everyItem", apiController.getAllItems);
router.get("/commonItems", apiController.getCommonItems);
router.get("/uncommonItems", apiController.getUncommonItems);
router.get("/legendaryItems", apiController.getLegendaryItems);
router.get("/equipmentItems", apiController.getEquipmentItems);
router.get("/voidItems", apiController.getVoidItems);
router.get("/lunarItems", apiController.getLunarItems);
router.get("/bossItems", apiController.getBossItems);
router.get(":itemName", apiController.getSpecificItems);


//This router will get everything survivor related
router.get("/survivor/everySurvivor", apiController.getAllSurvivors);
router.get("/survivor/rangedSurvivors", apiController.getRangedSurvivors);
router.get("/survivor/meleeSurvivors", apiController.getMeleeSurvivors);
// router.get(`/survivors/:name`, apiController.getSpecificSurvivors);


module.exports = router;