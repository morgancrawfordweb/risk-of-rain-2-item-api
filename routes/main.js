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
router.get("/items", itemController.getAllItems);
router.get("/items/common", itemController.getCommonItems);
router.get("/items/uncommon", itemController.getUncommonItems);
router.get("/items/legendary", itemController.getLegendaryItems);
router.get("/items/equipment", itemController.getEquipmentItems);
router.get("/items/void", itemController.getVoidItems);
router.get("/items/lunar", itemController.getLunarItems);
router.get("/items/boss", itemController.getBossItems);
// router.get("/items/:name", itemController.getSpecificItems);


//This router will get everything survivor related
router.get("/survivors", survivorController.getAllSurvivors);
router.get("/survivors/rangedSurvivor", survivorController.getRangedSurvivors);
router.get("/survivors/meleeSurvivor", survivorController.getMeleeSurvivors);
// router.get(`/survivors/:name`, survivorController.getSpecificSurvivors);


module.exports = router;
