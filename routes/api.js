const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");
const itemController = require("../controllers/item");
const survivorController = require("../controllers/survivor");
const apiController = require("../controllers/api");

//Future build below
// const monsterController = require("../controllers/monster");
// const environmentController = require("../controllers/environment");

//Main Routes - simplified for now
router.get("/", indexController.getIndex);
// router.get("/everything", indexController.getEverything);

//This router will get everything item related
router.get("api/items", itemController.getAllItems);
router.get("api/items/common", apiController.getCommonItems);
router.get("api/items/uncommon", apiController.getUncommonItems);
router.get("api/items/legendary", apiController.getLegendaryItems);
router.get("api/items/equipment", apiController.getEquipmentItems);
router.get("api/items/void", apiController.getVoidItems);
router.get("api/items/lunar", apiController.getLunarItems);
router.get("api/items/boss", apiController.getBossItems);
router.get("api/items/:name", apiController.getSpecificItems);


//This router will get everything survivor related
router.get("api/survivors", apiController.getAllSurvivors);
router.get("api/survivors/rangedSurvivor", apiController.getRangedSurvivors);
router.get("api/survivors/meleeSurvivor", apiController.getMeleeSurvivors);
router.get(`api/survivors/:name`, apiController.getSpecificSurvivors);


module.exports = router;