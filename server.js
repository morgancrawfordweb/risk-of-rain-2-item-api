const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");


const mainRoutes = require("./routes/main");
const apiRoutes = require("./routes/api");



//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});


















// const express = require('express')
// const app = express()
// // const cors = require('cors')
// const PORT = 8000

// // app.use(cors())

// class Survivor{
//   constructor(survivorName, health, damage, speed, armor, type){
//     this.survivorName = survivorName
//     this.health = health
//     this.damage = damage
//     this.speed = speed
//     this.armor = armor
//     this.type = type
//   }}

// const commando = new Survivor('Commando', 110, 12, 7,0, `ranged`)
// const acrid = new Survivor('Acrid', 160, 15,7,20, 'melee')
// const mercenary = new Survivor('Mercenary',110,12,7,20,'melee' )
// const huntress = new Survivor('Huntress',90,12,7,0,'ranged' )
// const bandit = new Survivor('Bandit',110,12,7,0,'ranged' )
// const artificer = new Survivor('Artificer',110,12,7,0,'ranged' )
// const rex = new Survivor('Rex',130,12,7,20,'ranged' )
// const loader = new Survivor('Loader', 160,12,7,20,'melee')
// const railgunner = new Survivor('Railgunner',110,12,7,0,'ranged' )
// const voidFiend = new Survivor('VoidFiend',110,12,7,0,'ranged' )
// const mulT = new Survivor('Mul-T',200,11,7,12,'ranged/melee' )
// const captain = new Survivor('Captain', 110,12,7,0,'ranged')
// const engineer = new Survivor('Engineer', 130,14,7,0,'ranged')
// const heretic = new Survivor('Heretic',440,18,8,0,'ranged' )





// class Item{
//     constructor(itemName, color, description,cooldown,stackType,rarity){
//       this.itemName = itemName
//       this.color = color
//       this.description = description
//       this.cooldown = cooldown
//       this.stackType = stackType
//       this.rarity = rarity
//     }}


// const armorPiercingRounds = new Item("Armor-Piercing Rounds",'white','Deal an addition 20% damage(+20% per stack) to bosses','none','Linear','Common')
// const crowbar = new Item("Crowbar","White","Deal +75%(+75% per stack) damage to enemies above 90% health",'None','Linear','Common')
// const backupMagazine = new Item('Backup Magazine','White','Add +1 (+1 per stack) charge of your secondary skill.','None','Linear','Common')
// const bisonSteak = new Item('Bison Steak','White','Increases maximum health by 25(+25 per stack)','None','Linear','Common')
// const bundleOfFireworks = new Item('Bundle of Fireworks','White','Activating an interactble launces 8(+4 per stack)fireworks that deal 300% base damage','None','Linear','Common')
// const bustlingFungus = new Item('Bustling Fungus','White','After standing still for 1 second, create a zone that heals for 4.5%(2.25% per stack) of your health every second to all allies within 3m(+1.5m per stack).','None','Linear','Common')
// const cautiousSlug = new Item('Cautious Slug','White','Increases base health regeneration by +3hp/s(+3hp/s per stack) while outside of combat','None','Linear','Common')
// const delicateWatch = new Item('Delicate Watch','White','Increase damage by 20% (+20% per stack). Taking damage to below 25% health breaks this item.','None','Linear','Common')
// const energyDrink = new Item('Energy Drink','White','Sprint speed is improved by 25% (+25% per stack).','None','Linear','Common')
// const focusCrystal = new Item('Focus Crystal','White','Increase damage to enemies within 13m by 20% (+20% per stack).','None','Linear','Common')
// const gasoline = new Item('Gasoline','White','Killing an enemy ignites all enemies within 12m (+4m per stack) for 150% base damage. Additionally, enemies burn for 150% (+75% per stack) base damage.','None','Linear','Common')
// const itemScrapWhite = new Item('Item Scrap, White','White','Does nothing. Prioritized when used with 3D Printers.','None','None','Common')
// const lensMakersGlasses = new Item("Lens-Maker's Glasses",'White',"Your attacks have a 10% (+10% per stack) chance to 'Critically Strike', dealing double damage.",'None','Linear','Common')
// const medkit = new Item('Medkit','White','2 seconds after getting hurt, heal for 20 plus an additional 5% (+5% per stack) of maximum health.','None','Linear','Common')
// const mocha = new Item('Mocha','White','Increases attack speed by 7.5% (+7.5 per stack) and movement speed by 7% (+7% per stack).','None','Linear','Common')
// const monsterTooth = new Item('Monster Tooth','White','Killing an enemy spawns a healing orb that heals for 8 plus an additional 2% (+2% per stack) of maximum health.','None','Linear','Common')
// const oddlyShapedOpal = new Item('Oddly-shaped Opal','White','Increase armor by 100 (+100 per stack) while out of danger.','None','Linear','Common')
// const paulsGoatHoof = new Item("Paul's Goat Hoof",'White','Increases movement speed by 14% (+14% per stack).','None','Linear','Common')
// const personalShieldGenerator = new Item('Personal Shield Generator','White','Gain a shield equal to 8% (+8% per stack) of your maximum health. Recharges outside of danger.','None','Linear','Common')
// const powerElixir = new Item('Power Elixir','White','Taking damage to below 25% health consumes this item, healing you for 75% of maximum health.','None','None','Common')
// const repulsionArmorPlate = new Item('Repulsion Armor Plate','White','Reduce all incoming damage by 5 (+5 per stack). Cannot be reduced below 1.','None','Linear','Common')
// const rollOfPennies = new Item('Roll of Pennies','White','Gain 3 (+3 per stack) gold on taking damage from an enemy. Scales over time.','None','Linear','Common')
// const rustedKey = new Item('Rusted Key','White','A hidden cache containing an item (80%/20%) will appear in a random location on each stage. Opening the cache consumes this item.','None','None','Common')
// const soldiersSyringe = new Item("Soldiers Syringe", 'White','Increases attack speed by 10%','None','Linear','Common')
// const stickyBomb = new Item('Sticky Bomb','White','5% (+5% per stack) chance on hit to attach a bomb to an enemy, detonating for 180% TOTAL damage.','None','Linear','Common')
// const stunGrenade = new Item('Stun Grenade','White','5% (+5% on stack) chance on hit to stun enemies for 2 seconds.','None','Hyperbolic','Common')
// const topazBrooch = new Item('Topaz Brooch','White','Gain a temporary barrier on kill for 15 health (+15 per stack).','None','Linear','Common')
// const tougherTimes = new Item('Tougher Times','White','15% (+15% per stack) chance to block incoming damage. Unaffected by luck.','None','Hyperbolic','Common')
// const triTipDagger = new Item('Tri-Tip Dagger','White','10% (+10% per stack) chance to bleed an enemy for 240% base damage.','None','Linear','Common')
// const warBanner = new Item('Warbanner','White','On level up or starting the Teleporter event, drop a banner that strengthens all allies within 16m (+8m per stack). Raise attack and movement speed by 30%.','None','Linear','Common')


// const atgMissleMkOne= new Item('AtG Missile Mk.1','Green','10% chance to fire a missile that deals 300% (+300% per stack) TOTAL damage.','None','Linear','Uncommon')
// const bandolier = new Item('Bandolier','Green','18% (+10% per stack) chance on kill to drop an ammo pack that resets all skill cooldowns.','None','Special','Uncommon')
// const berzerkersPauldron = new Item("Bezerker's Pauldron",'Green',"Berzerker's Pauldron	Killing 4 enemies within 1 second sends you into a frenzy for 6s (+4s per stack). Increases movement speed by 50% and attack speed by 100%.",'None','Linear','Uncommon')
// const chronobauble = new Item('Chronobauble','Green','Slow enemies on hit for -60% movement speed for 2s (+2s per stack).','None','Linear','Uncommon')
// const deathMark = new Item('Death Mark','Green','Enemies with 4 or more debuffs are marked for death, increasing damage taken by 50% from all sources for 7 (+7 per stack) seconds.','None','Linear','Uncommon')
// const fuelCell = new Item('Fuel Cell','Green','Hold an additional equipment charge (+1 per stack). Reduce equipment cooldown by 15% (+15% per stack).','None','Linear Exponential','Uncommon')
// const ghorsTome = new Item("Ghor's Tome",'Green','4% (+4% on stack) chance on kill to drop a treasure worth $25. Scales over time.','None','Linear','Uncommon')
// const harvestersScythe = new Item("Harvester's Scythe",'Green','Gain 5% critical chance. Critical strikes heal for 8 (+4 per stack) health.','None','Linear None','Uncommon')
// const hopooFeather = new Item('Hopoo Feather','Green','Gain +1 (+1 per stack) maximum jump count.','None','Linear','Uncommon')
// const huntersHarpoon = new Item("Hunter's Harpoon",'Green','Killing an enemy increases movement speed by 125%, fading over 1 (+0.5 per stack) seconds.','None','Linear','Uncommon')
// const ignitionTank = new Item('Ignition Tank','Green','Ignite effects deal +300% (+300% per stack) more damage over time.','None','Linear','Uncommon')
// const infusion = new Item("Infusion", "Green","Killing an enemy increases your health permanently by 1(+1 per stack), up to a maximum of 100(+100 per stack) health.","None","Linear",'Uncommon')
// const itemScrapGreen = new Item('Item Scrap, Green','Green','Does nothing. Prioritized when used with 3D Printers.','None','Linear','Uncommon')
// const kjarosBand = new Item("Kjaro's Band",'Green','Hits that deal more than 400% damage also blasts enemies with a runic flame tornado, dealing 300% (+300% per stack) TOTAL damage over time. ','10 Seconds','Linear','Uncommon')
// const leechingSeed = new Item('Leeching Seed','Green','Dealing damage heals you for 1 (+1 per stack) health.','None','Linear','Uncommon')
// const leptonDaisy = new Item('Lepton Daisy','Green','Release a healing nova during the Teleporter event, healing all nearby allies for 50% of their maximum health. Occurs 1 (+1 per stack) times.','None','Linear','Uncommon')
// const oldGuillotine = new Item('Old Guillotine','Green','Instantly kill Elite monsters below 13% (+13% per stack) health.','None','Hyperbolic','Uncommon')
// const oldWarStealthkit = new Item('Old War Stealthkit','Green','Falling below 25% health causes you to gain 40% movement speed and invisibility for 5s. Recharges every 30 seconds (-50% per stack).','30 Seconds','Linear','Uncommon')
// const predatoryInstincts = new Item('Predatory Instincts','Green','Gain 5% critical chance. Critical strikes increase attack speed by 12%. Maximum cap of 36% (+24% per stack) attack speed.','None','Linear, None','Uncommon')
// const razorwire = new Item('Razor Wire','Green','Getting hit causes you to explode in a burst of razors, dealing 160% damage. Hits up to 5 (+2 per stack) targets in a 25m (+10m per stack) radius','None','Linear','Uncommon')
// const redWhip = new Item('Red Whip','Green','Leaving combat boosts your movement speed by 30% (+30% per stack).','None','Linear','Uncommon')
// const regeneratingScrap = new Item('Regenerating Scrap','Green','Does nothing. Prioritized when used with Uncommon 3D Printers. At the start of each stage, it regenerates.','None','Linear','Uncommon')
// const roseBuckler = new Item('Rose Buckler','Green','Increase armor by 30 (+30 per stack) while sprinting.','None','Linear','Uncommon')
// const runaldsBand = new Item('Runalds Band','Green','Hits that deal more than 400% damage also blasts enemies with a runic ice blast, slowing them by 80% for 3s (+3s per stack) and dealing 250% (+250% per stack) TOTAL damage.','10 Seconds','Linear','Uncommon')
// const shippingRequestForm = new Item('Shipping Request Form','Green','A delivery containing 2 items (79%/20%/1%) will appear in a random location on each stage. (Increases rarity chances of the items per stack).','None','Special','Uncommon')
// const shuriken = new Item('Shuriken','Green','Activating your Primary skill also throws a shuriken that deals 400% (+100% per stack) base damage. You can hold up to 3 (+1 per stack) shurikens which all reload over 10 seconds.','10 Seconds','Linear','Uncommon')
// const squidPolyp = new Item('Squid Polyp','Green','Activating an interactable summons a Squid Turret that attacks nearby enemies at 100% (+100% per stack) attack speed. Lasts 30 seconds.','None','Linear','Uncommon')
// const Ukulele = new Item('Ukulele','Green','25% chance to fire chain lightning for 80% TOTAL damage on up to 3 (+2 per stack) targets within 20m (+2m per stack).','None','Linear','Uncommon')
// const warHorn = new Item('War Horn','Green','Activating your Equipment gives you +70% attack speed for 8s (+4s per stack).','None','Linear','Uncommon')
// const waxQuail = new Item('Wax Quail','Green','Jumping while sprinting boosts you forward by 10m (+10m per stack).','None','Linear','Uncommon')
// const willOTheWisp = new Item("Will-o'-the-wisp",'Green','On killing an enemy, spawn a lava pillar in a 12m (+2.4m per stack) radius for 350% (+280% per stack) base damage.','None','Linear','Uncommon')

// const fiftySevenLeafClover  = new Item('57 Leaf Clover','Red','All random effects are rolled +1 (+1 per stack) times for a favorable outcome.','None','Linear','Legendary')
// const aegis = new Item('Aegis','Red','Healing past full grants you a temporary barrier for 50% (+50% per stack) of the amount you healed.','None','Linear','Legendary')
// const alienHead  = new Item('Alien Head','Red','Reduce skill cooldowns by 25% (+25% per stack).','None','Linear','Legendary')
// const bensRaincoat  = new Item("Ben's Raincoat",'Red','Prevents 1 (+1 per stack) debuff and instead grants a temporary barrier for 10% of maximum health. Recharges every 5 seconds.','5 Seconds','Linear','Legendary')
// const bottledChaos  = new Item('Bottled Chaos','Red','Trigger a random equipment effect 1 (+1 per stack) time(s).','None','Linear','Legendary')
// const brainstalks = new Item("Brainstalks", "Red", "Upon killing an elite monster, enter a frenzy for 4s(4s per stack) where skills have 0.5s cooldowns.",'Legendary')
// const brilliantBehemoth = new Item('Brilliant Behemoth','Red','All your attacks explode in a 4m (+2.5m per stack) radius for a bonus 60% TOTAL damage to nearby enemies.','None','Linear','Legendary')
// const ceremonialDagger = new Item('Ceremonial Dagger','Red','Killing an enemy fires out 3 homing daggers that deal 150% (+150% per stack) base damage.','None','Linear','Legendary')
// const defensiveMicrobots = new Item('Defensive Microbots','Red','Shoot down 1 (+1 per stack) projectiles within 20m every 0.5 seconds. Recharge rate scales with attack speed.','0.5 Seconds','Linear','Legendary')
// const diosBestFriend = new Item("Dio's Best Friend",'Red','Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability.','None','Linear','Legendary')
// const frostRelic = new Item('Frost Relic','Red','Killing an enemy surrounds you with an ice storm that deals 1200% damage per second and slows enemies by 80% for 1.5s. The storm grows with every kill, increasing its radius by 2m. Stacks up to 18m (+12m per stack).','None','Linear','Legendary')
// const h3ad5tv2 = new Item('H3AD-5T v2','Red','Increase jump height. Creates a 5m-100m radius kinetic explosion on hitting the ground, dealing 1000%-10000% base damage that scales up with fall distance. Recharges in 10 (-50% per stack) seconds.','10 Seconds','Exponential','Legendary')
// const happiestMask = new Item('Happiest Mask','Red','Killing enemies has a 7% chance to spawn a ghost of the killed enemy with 1500% damage. Lasts 30s (+30s per stack).','None','Linear','Legendary')
// const hardlightAfterburner = new Item('Hardlight Afterburner','Red','Add +2 (+2 per stack) charges of your Utility skill. Reduces Utility skill cooldown by 33%.','None','Linear','Legendary')
// const interstellarDeskPlant = new Item('','Red',"On kill, plant a healing fruit seed that grows into a plant after 5 seconds.The plant heals for 5% of maximum health every 0.5 second to all allies within 10m (+5.0m per stack). Lasts 10 seconds.",'None','Linear','Legendary')
// const itemScrapRed = new Item('Item Scrap, Red','Red','Does nothing. Prioritized when used with 3D Printers.','None','Linear','Legendary')
// const laserScope = new Item('Laser Scope','Red','Critical Strikes deal an additional 100% damage (+100% per stack).','None','Linear','Legendary')
// const nkuhanasOpinion = new Item("N'kuhana's Opinion",'Red','Store 100% (+100% per stack) of healing as Soul Energy. After your Soul Energy reaches 10% of your maximum health, fire a skull that deals 250% of your Soul Energy as damage.','None','Linear','Legendary')
// const pocketIcbm = new Item('Pocket I.C.B.M.','Red','All missile items and equipment fire an additional 2 missiles. Increase missile damage by 0% (+50% per stack)','None','Linear','Legendary')
// const rejuvenationRack = new Item('Rejuvenation Rack','Red','Heal +100% (+100% per stack) more.','None','Linear','Legendary')
// const resonanceDisc = new Item('Resonance Disc','Red',"Killing 4 enemies in 7 seconds charges the Resonance Disc. The disc launches itself toward a target for 300% base damage (+300% per stack), piercing all enemies it doesn't kill, and then explodes for 1000% base damage (+1000% per stack). Returns to the user, striking all enemies along the way for 300% base damage (+300% per stack).",'None','Linear','Legendary')
// const sentientMeatHook = new Item('Sentient Meat Hook','Red','20% (+20% per stack) chance on hit to fire homing hooks at up to 10 (+5 per stack) enemies for 100% TOTAL damage.','None','Hyperbolic Linear','Legendary')
// const shatteringJustice = new Item('Shattering Justice','Red','After hitting an enemy 5 times, reduce their armor by 60 for 8 (+8 per stack) seconds.','None','Linear','Legendary')
// const soulboundCatalyst = new Item('Soulbound Catalyst','Red','Kills reduce equipment cooldown by 4s (+2s per stack).','None','Linear','Legendary')
// const spareDroneParts = new Item('Spare Drone Parts','Red','Gain Col. Droneman. Drones gain +50% (+50% per stack) attack speed and cooldown reduction. Drones gain 10% chance to fire a missile on hit, dealing 300% TOTAL damage. Drones gain an automatic chain gun that deals 6x100% damage, bouncing to 2 enemies.','None','Linear','Legendary')
// const symbioticScorpion = new Item('Symbiotic Scorpion','Red','100% chance on hit to reduce armor by 2 (+2 per stack) permanently.','None','Linear','Legendary')
// const unstableTeslaCoil = new Item('Unstable Tesla Coil','Red','Fire out lightning that hits 3 (+2 per stack) enemies for 200% base damage every 0.5s. The Tesla Coil switches off every 10 seconds.','None','Linear','Legendary')
// const wakeOfVultures = new Item('Wake of Vultures','Red','Gain the power of any killed elite monster for 8s (+5s per stack).','None','Linear','Legendary')

// const artifactKey = new Item('Artifact Key','Yellow','A stone shard with immense power.','None','None','Boss')
// const chargedPerforator = new Item("Charged Perforator","Yellow","10% chance on hit to down a lightning strike, dealing 500%(+500% per stack) damage.",'Boss')
// const defenseNucleus = new Item('Defense Nucleus','Yellow','Killing elite monsters spawns an Alpha Construct with bonus 300% damage and 300% health. Limited to 4 (+4 per stack).','None','Linear','Boss')
// const empathyCores = new Item('Empathy Cores','Yellow','Every 30 seconds, summon two Solus Probes that gain +100% (+100% per stack) damage per ally on your team.','None','None','Boss')
// const genesisLoop = new Item('Genesis Loop','Yellow','Falling below 25% health causes you to explode, dealing 6000% base damage. Recharges every 30 / (2 +1 per stack) seconds .','None','Linear','Boss')
// const halcyonSeed = new Item('Halcyon Seed','Yellow','Summon Aurelionite during the teleporter event. It has 100% (+50% per stack) damage and 100% (+100% per stack) health.','None','Linear','Boss')
// const irradiantPearl = new Item('Irradiant Pearl','Yellow','Increases ALL stats by 10% (+10% per stack).','None','Linear','Boss')
// const itemScrapYellow = new Item('Item Scrap, Yellow','Yellow','Does nothing. Prioritized when used with 3D Printers.','None','Linear','Boss')
// const littleDisciple = new Item('Little Disciple','Yellow','Fire a tracking wisp for 300% (+300% per stack) damage. Fires every 1.6 seconds while sprinting. Fire rate increases with movement speed.','None','Linear','Boss')
// const miredUrn = new Item('Mired Urn','Yellow',"While in combat, the nearest 1 (+1 per stack) enemies to you within 13m will be 'tethered' to you, dealing 100% damage per second, applying tar, and healing you for 100% of the damage dealt.",'None','Linear','Boss')
// const moltenPerforator = new Item('Molten Perforator','Yellow','10% chance on hit to call forth 3 magma balls from an enemy, dealing 300% (+300% per stack) damage each.','None','Linear','Boss')
// const pearl = new Item('Pearl','Yellow','Increases maximum health by 10% (+10% per stack).','None','Linear','Boss')
// const planula = new Item('Planula','Yellow','Heal from incoming damage for 15 (+15 per stack).','None','Linear','Boss')
// const queensGland = new Item('Queens Gland','Yellow','Every 30 seconds, summon a Beetle Guard with bonus 300% damage and 100% health. Can have up to 1 (+1 per stack) Guards at a time.','30 Seconds','Linear','Boss')
// const shatterspleen = new Item('Shatter Spleen','Yellow','Gain 5% critical chance. Critical Strikes bleed enemies for 240% base damage. Bleeding enemies explode on death for 400% (+400% per stack) damage, plus an additional 15% (+15% per stack) of their maximum health.','None','Linear, None','Boss')
// const titanicKnurl = new Item('Titanic Knurl','Yellow','Increase maximum health by 40 (+40 per stack) and base health regeneration by +1.6 hp/s (+1.6 hp/s per stack).','None','Linear','Boss')

// const beadsOfFealty = new Item('Beads of Fealty','Blue','Seems to do nothing... but...','None','Linear','Lunar')
// const brittleCrown = new Item('Brittle Crown','Blue',"30% chance on hit to gain 2 (+2 per stack) gold. Scales over time.Lose gold on taking damage equal to 100% (+100% per stack) of the maximum health percentage you lost.",'None','Linear','Lunar')
// const corpsebloom = new Item("Corpsebloom","Blue","Heal +100%(+100% per stack) more. All healing is applied over time. Can heal for a maximum of 10%(-50% per stack) of your health per second.",'Lunar')
// const defiantGouge = new Item('Defiant Gouge','Blue','Using a Shrine summons enemies (stronger per stack) nearby. Scales over time.','None','Linear','Lunar')
// const egocentrism = new Item('Egocentrism','Blue','Every 3 (-50% per stack) seconds, gain an orbiting bomb that detonates on impact for 360% damage, up to a maximum of 3 bombs (+1 per stack). Every 60 seconds, a random item is converted into this item.','60','Hyperbolic Linear','Lunar')
// const essenceOfHeresy = new Item('Essence of Heresy','Blue','Replace your Special Skill with Ruin. Dealing damage adds a stack of Ruin for 10 (+10 per stack) seconds. Activating the skill detonates all Ruin stacks at unlimited range, dealing 300% damage plus 120% damage per stack of Ruin. Recharges after 8 (+8 per stack) seconds.','8 Seconds','Linear','Lunar')
// const euologyZero = new Item('Eulogy Zero','Blue','Items have a 5% (+5% per stack) chance to become a Lunar item instead.','None','Linear','Lunar')
// const focusedConvergence = new Item('Focused Convergence','Blue','Teleporters charge 30% (+30% per stack) faster, but the size of the Teleporter zone is 50% (-50% per stack) smaller.','None','Linear','Lunar')
// const gestureOfTheDrowned = new Item('Gesture of the Drowned','Blue','Reduce Equipment cooldown by 50% (+15% per stack). Forces your Equipment to activate whenever it is off cooldown.','None','Linear','Lunar')
// const hooksOfHeresy = new Item('Hooks of Heresy','Blue','Replace your Secondary Skill with Slicing Maelstrom.Charge up a projectile that deals 875% damage per second to nearby enemies, exploding after 3 seconds to deal 700% damage and root enemies for 3 (+3 per stack) seconds. Recharges after 5 (+5 per stack) seconds.','5 Seconds. +5s per stack','Linear','Lunar')
// const lightFluxPauldron = new Item('Light Flux Pauldron','Blue','Decrease skill cooldowns by 50% (+50% per stack). Decrease attack speed by 50% (+50% per stack).','None','Exponential Linear','Lunar')
// const mercurialRachis = new Item('Mercurial Rachis','Blue','Creates a Ward of Power in a random location nearby that buffs both enemies and allies within 16m (+50% per stack), causing them to deal +50% damage.','None','Exponential','Lunar')
// const purity = new Item('Purity','Blue','All skill cooldowns are reduced by 2 (+1 per stack) seconds. All random effects are rolled +1 (+1 per stack) times for an unfavorable outcome.','None','Linear','Lunar')
// const shapedGlass = new Item('Shaped Glass','Blue','Increase base damage by 100% (+100% per stack). Reduce maximum health by 50% (+50% per stack).','None','Exponential','Lunar')
// const stoneFluxPauldron = new Item('Stone Flux Pauldron','Blue','Increase max health by 100% (+100% per stack). Reduce movement speed by 50% (+50% per stack).','None','Linear Hyperbolic','Lunar')
// const stridesOfHeresy = new Item('Strides of Heresy','Blue','Replace your Utility Skill with Shadowfade. Fade away, becoming intangible and gaining +30% movement speed. Heal for 18.2% (+18.2% per stack) of your maximum health. Lasts 3 (+3 per stack) seconds.','None','Linear','Lunar')
// const transcendence = new Item('Transcendence','Blue','Convert all but 1 health into regenerating shields. Gain 50% (+25% per stack) maximum health.','None','Linear','Lunar')
// const visionsOfHeresy = new Item('Visions of Heresy','Blue','Replace your Primary Skill with Hungering Gaze. Fire a flurry of tracking shards that detonate after a delay, dealing 120% base damage. Hold up to 12 charges (+12 per stack) that reload after 2 seconds (+2 per stack).','None','Linear','Lunar')


// const benthicBloom = new Item('Benthic Bloom','Purple','Upgrades 3 (+3 per stack) random items to items of the next higher rarity at the start of each stage. Corrupts all 57 Leaf Clovers.','None','Linear','Void')
// const encrustedKey = new Item('Encrusted Key','Purple','A hidden cache containing an item (60%/30%/10%) will appear in a random location on each stage. Opening the cache consumes this item. Corrupts all Rusted Keys.','None','None','Void')
// const lostSeersLenses = new Item("Lost seer's Lenses",'Purple',"Your attacks have a 0.5% (+0.5% per stack) chance to instantly kill a non-Boss enemy. Corrupts all Lens-Maker's Glasses.",'None','Linear','Void')
// const lysateCell = new Item('Lysate Cell','Purple','Add +1 (+1 per stack) charge of your Special skill. Reduces Special skill cooldown by 33%. Corrupts all Fuel Cells.','None','Linear','Void')
// const needletick = new Item('Needle Tick','Purple','10% (+10% per stack) chance to collapse an enemy for 400% base damage. Corrupts all Tri-Tip Daggers.','None','Linear','Void')
// const newlyHatchedZoea = new Item('Newly Hatched Zoea','Purple','Every 60 (-50% per stack) seconds, gain a random Void ally. Can have up to 1 (+1 per stack) allies at a time. Corrupts all yellow items.','None','Hyperbolic Linear','Void')
// const plasmaShrimp = new Item('Plasma Shrimp','Purple','Gain a shield equal to 10% of your maximum health. While you have a shield, hitting an enemy fires a missile that deals 40% (+40% per stack) TOTAL damage. Corrupts all AtG Missile Mk. 1s.','None','Linear','Void')
// const pluripotentLarva = new Item('Pluripotent Larva','Purple',"Upon death, this item will be consumed and you will return to life with 3 seconds of invulnerability, and all of your items that can be corrupted will be. Corrupts all Dio's Best Friends.",'None','Linear','Void')
// const polylute = new Item('Polylute','Purple','25% chance to fire lightning for 60% TOTAL damage up to 3 (+3 per stack) times. Corrupts all Ukuleles.','None','Linear','Void')
// const saferSpaces = new Item('Safer Spaces','Purple','Blocks incoming damage once. Recharges after 15 seconds (-10% per stack) Corrupts all Tougher Times.','None','Hyperbolic','Void')
// const singularityBand = new Item('','Purple',"Hits that deal more than 400% damage also fire a black hole that draws enemies within 15m into its center. Lasts 5 seconds before collapsing, dealing 100% (+100% per stack) TOTAL damage. Recharges every 20 seconds. Corrupts all Runald's and Kjaro's Bands.",'20 Seconds','Linear','Void')
// const tentabauble = new Item("Tentabauble","Purple","5%(+5% per stack) chance on hit to root enemies for 1s(+1s per stack).Corrupts all chronobaubles",'Void')
// const voidsentFlame = new Item('Voidsent Flame','Purple',"Upon hitting an enemy at full health, spawn a lava pillar in a 12m (+2.4m per stack) radius for 260% (+156% per stack) base damage. Corrupts all Will-o'-the-wisps.",'None','Linear','Void')
// const weepingFungus = new Item('Weeping Fungus','Purple','Heals for 2% (+2% per stack) of your health every second while sprinting. Corrupts all Bustling Fungi.','None','Linear','Void')



// const blastShower = new Item('Blast Shower','Orange',"Cleanse all negative effects. Includes debuffs, damage over time, and nearby projectiles.",'20 Seconds','None','Equipment')
// const disposableMissleLauncher = new Item('Disposable Missle Launcher','Orange',"Fire a swarm of 12 missiles that deal 12x300% damage.",'45 Seconds','None','Equipment')
// const eccentricVase = new Item('Eccentric Vase','Orange',"Create a quantum tunnel of up to 1000m in length. Lasts 30 seconds.",'45 Seconds','None','Equipment')
// const executiveCard = new Item('Executive Card','Orange',"Whenever you make a gold purchase, get 10% of the spent gold back. If the purchase is a multishop terminal, the other terminals will remain open.",'0.1 Seconds','None','Equipment')
// const foreignFruit = new Item('Foreign Fruit','Orange',"Instantly heal for 50% of your maximum health.",'45 Seconds','None','Equipment')
// const forgiveMePlease = new Item('Forgive Me PLease','Orange',"Throw a cursed doll out that triggers any On-Kill effects you have every 1 second for 8 seconds.",'45 Seconds','None','Equipment')
// const fuelArray = new Item('Fuel Array','Orange',"Looks like it could power something. EXTREMELY unstable...",'None','None','Equipment')
// const gnarledWoodsprite = new Item('Gnarled Woodsprite','Orange',"Gain a Woodsprite follower that heals for 1.5% of your maximum health/second. Can be sent to an ally to heal them for 10% of their maximum health.",'15 Seconds','None','Equipment')
// const gooboJr = new Item('Goobo Jr.','Orange',"Spawn a gummy clone that has 300% damage and 300% health. Expires in 30 seconds.",'100 Seconds','None','Equipment')
// const goragsOpus = new Item("Gorag's Opus",'Orange',"All allies enter a frenzy for 7 seconds. Increases movement speed by 50% and attack speed by 100%.",'45 Seconds','None','Equipment')
// const jadeElephant = new Item('Jade Elephant','Orange',"Gain 500 armor for 5 seconds.",'45 Seconds','None','Equipment')
// const milkyChrysalis = new Item('Milky Chrysalis','Orange',"Sprout wings and fly for 15 seconds. Gain +20% movement speed for the duration.",'60 Seconds','None','Equipment')
// const molotov6Pack = new Item('Molotov(6-Pack)','Orange',"Throw 6 molotov cocktails that ignites enemies for 500% base damage. Each molotov leaves a burning area for 200% damage per second.",'45 Seconds','None','Equipment')
// const ocularHud = new Item('Ocular HUD','Orange',"Gain +100% Critical Strike Chance for 8 seconds.",'60 Seconds','None','Equipment')
// const preonAccumulator = new Item('Preon Accumulator','Orange',"Fires preon tendrils, zapping enemies within 35m for up to 600% damage/second. On contact, detonate in an enormous 20m explosion for 4000% damage.",'145 Seconds','None','Equipment')
// const primordialCube = new Item('Primordial Cube','Orange',"Fire a black hole that draws enemies within 30m into its center. Lasts 10 seconds",'60 Seconds','None','Equipment')
// const radarScanner = new Item('Radar Scanner','Orange',"Reveal all interactables within 500m for 10 seconds.",'45 Seconds','None','Equipment')
// const recycler = new Item('Recycler','Orange',"Transform an Item or Equipment into a different one. Can only be converted into the same tier one time.",'45 Seconds','None','Equipment')
// const remoteCaffeinator = new Item('Remote Caffeinator','Orange',"Request an Eclipse Zero Vending Machine from the UES Safe Travels. Delivery guaranteed in 5 seconds, dealing 2000% damage. Heal up to 3 targets for 25% of their maximum health.",'60 Seconds','None','Equipment')
// const royalCapacitor = new Item('Royal Capacitor','Orange',"Call down a lightning strike on a targeted monster, dealing 3000% damage and stunning nearby monsters.",'20 Seconds','None','Equipment')
// const sawmerang = new Item('Sawmerang','Orange',"Throw three large saw blades that slice through enemies for 3x400% damage. Also deals an additional 3x100% damage per second while bleeding enemies. Can strike enemies again on the way back.",'45 Seconds','None','Equipment')
// const superMassiveLeech = new Item("Super Massive Leech","Orange"," Heal for 20% of the damage you deal. Lasts 8 seconds",'60 Seconds','None','Equipment')
// const theBackUp = new Item('The Back-up','Orange',"Call 4 Strike Drones to fight for you. Lasts 25 seconds.",'100 Seconds','None','Equipment')
// const theCrowdfunder = new Item('The Crowd Funder','Orange',"Fires a continuous barrage that deals 100% damage per bullet. Costs $1 per bullet. Cost increases over time.",'None','None','Equipment')
// const trophyHuntersTricorn = new Item("Trophy Hunter's Tricorn",'Orange',"Execute any enemy capable of spawning a unique reward, and it will drop that item. Equipment is consumed on use.",'60 Seconds','None','Equipment')
// const trophyHuntersTricornConsumed = new Item("Trophy Hunter's Tricorn(Consumed)",'Orange',"Looks kinda cool, but that's about it.",'60 Seconds','None','Equipment')
// const volcanicEgg = new Item('Volcanic Egg','Orange',"Turn into a draconic fireball for 5 seconds. Deal 500% damage on impact. Detonates at the end for 800% damage.",'30 Seconds','None','Equipment')

// const effigyOfGrief = new Item("Effigy of Grief",'Blue',"ALL characters within are slowed by 50% and have their armor reduced by 20. Can place up to 5.",'15 Seconds','None','Lunar Equipment')
// const glowingMeteorite = new Item("Glowing Meteorite",'Blue',"Rain meteors from the sky, damaging ALL characters for 600% damage per blast. Lasts 20 seconds.",' 140 Seconds','None','Lunar Equipment')
// const helfireTincture = new Item("Helfire Tincture",'Blue',"Ignite ALL characters within 15m for 12s. Deal 5% of your maximum health/second as burning as damage. The burn is 0.5x stronger on yourself, 0.25x stronger on allies, and 24x stronger on enemies.",'45 Seconds','None','Lunar Equipment')
// const spinelTonic = new Item("Spinel Tonic",'Blue',"Drink the Tonic, gaining a boost for 20 seconds. Increases damage by +100%. Increases attack speed by +70%. Increases armor by +20. Increases maximum health by +50%. Increases passive health regeneration by +300%. Increases movespeed by +30%. When the Tonic wears off, you have a 20% chance to gain a Tonic Affliction, reducing all of your stats by -5% (-5% per stack).",'60 Seconds','None','Lunar Equipment')

// const herBitingEmbrace = new Item("Her Biting Embrace",'Orange',"Become an aspect of ice.",'None','Glacial','Elite Equipment')
// const hisReassurance = new Item("His Reassurance",'Orange',"Become an aspect of earth.",'None','Mending','Elite Equipment')
// const ifritsDistinction = new Item("Ifrits Distinction",'Orange',"Become an aspect of fire.",'None','Blazing','Elite Equipment')
// const nkuhanasRetort = new Item("N'kuhana's Retort",'Orange',"Become an aspect of corruption.",'None','Malachite','Elite Equipment')
// const sharedDesign = new Item("Shared Design",'Orange',"Become an aspect of perfection.",'None','Perfected','Elite Equipment')
// const silenceBetweentwoStrikes = new Item("Silence Between Two Strikes.",'Orange',"Become an aspect of lightning.",'None','Overloading','Elite Equipment')
// const spectralCirclet = new Item("Spectral Circlet",'Orange',"Become an aspect of incorporeality.",'None','Celestine','Elite Equipment')
  

// // const survivors ={
// //   'acrid': acrid,
// //   'artificer': artificer,
// //   'bandit': bandit,
// //   'captain': captain,
// //   'commando': commando,
// //   'engineer': engineer,
// //   'heretic': heretic,
// //   'huntress': huntress,
// //   'loader': loader,
// //   'mul-t': mulT,
// //   'mercenary': mercenary,
// //   'rex': rex,
// //   'railgunner': railgunner,
// //   'void fiend': voidFiend
// // }


// const survivors = [acrid,artificer,bandit,captain,commando,engineer,heretic,huntress,loader,mulT,mercenary,rex,railgunner,voidFiend]



// const items = {
//     'armor piercing rounds': armorPiercingRounds,
//     'backup magazine': backupMagazine,
//     'bison steak':bisonSteak,
//     'bundle of fireworks':bundleOfFireworks,
//     'bustling fungus': bustlingFungus,
//     'cautious slug': cautiousSlug,
//     'crowbar': crowbar,
//     'delicate watch': delicateWatch,
//     'energy drink': energyDrink,
//     'focus crystal': focusCrystal,
//     'gasoline': gasoline,
//     'item scrap, white': itemScrapWhite,
//     'lens makers glasses': lensMakersGlasses,
//     'medkit': medkit,
//     'mocha': mocha,
//     'monster tooth': monsterTooth,
//     'oddly shaped opal': oddlyShapedOpal,
//     'pauls goat hoof': paulsGoatHoof,
//     'personal shield generator': personalShieldGenerator,
//     'power elixir': powerElixir,
//     'repulsion armor plate': repulsionArmorPlate,
//     'roll of pennies': rollOfPennies,
//     'rusted key': rustedKey,
//     'soldiers syringe': soldiersSyringe,
//     'sticky bomb': stickyBomb,
//     'stun grenade': stunGrenade,
//     'topaz brooch': topazBrooch,
//     'tougher times': tougherTimes,
//     'tritip dagger': triTipDagger,
//     'warbanner': warBanner,
//     'atg missile mk.1': atgMissleMkOne,
//     'bandolier': bandolier,
//     'berzerkers pauldron': berzerkersPauldron,
//     'chronobauble': chronobauble,
//     'death mark': deathMark,
//     'fuel cell':fuelCell,
//     'ghors tome': ghorsTome,
//     'harvesters scythe': harvestersScythe,
//     'hopoo feather': hopooFeather,
//     'hunters harpoon': huntersHarpoon,
//     'ignition tank': ignitionTank,
//     'infusion': infusion,
//     'item scrap, green': itemScrapGreen,
//     'kjaros band': kjarosBand,
//     'leeching seed': leechingSeed,
//     'lepton daisy': leptonDaisy,
//     'old guillotine': oldGuillotine,
//     'old war stealthkit': oldWarStealthkit,
//     'predatory instincts': predatoryInstincts,
//     'razorwire': razorwire,
//     'red whip': redWhip,
//     'regenerating scrap': regeneratingScrap,
//     'rose buckler': roseBuckler,
//     'runalds band': runaldsBand,
//     'shipping request form': shippingRequestForm,
//     'shuriken': shuriken,
//     'squid polyp': squidPolyp,
//     'ukulele': Ukulele,
//     'war horn': warHorn,
//     'wax quail': waxQuail,
//     'will-o-the-wisp': willOTheWisp,
//     '57 leaf clover': fiftySevenLeafClover,
//     'aegis': aegis,
//     'alien head': alienHead,
//     'bens raincoat': bensRaincoat,
//     'bottled chaos': bottledChaos,
//     'brainstalks' : brainstalks,
//     'brilliant behemoth': brilliantBehemoth,
//     'ceremonial dagger': ceremonialDagger,
//     'defensive microbots': defensiveMicrobots,
//     'dios best friend': diosBestFriend,
//     'frost relic': frostRelic,
//     'h3ad-5t v2': h3ad5tv2,
//     'happiest mask': happiestMask,
//     'hardlight afterburner': hardlightAfterburner,
//     'interstellar desk plant': interstellarDeskPlant,
//     'item scrap, red': itemScrapRed,
//     'laser scope': laserScope,
//     "n'kuhana's opinion": nkuhanasOpinion,
//     'pocket i.c.b.m': pocketIcbm,
//     'rejuvenation rack': rejuvenationRack,
//     'resonance disc': resonanceDisc,
//     'sentient meat hook': sentientMeatHook,
//     'shattering justice': shatteringJustice,
//     'soulbound catalyst': soulboundCatalyst,
//     'spare drone parts': spareDroneParts,
//     'symbiotic scorpion': symbioticScorpion,
//     'unstable tesla coil': unstableTeslaCoil,
//     'wake of vultures': wakeOfVultures,
//     'artifact key': artifactKey,
//     'charged perforator' : chargedPerforator,
//     'defense nucleus': defenseNucleus,
//     'empathy cores': empathyCores,
//     'gensis loop': genesisLoop,
//     'halcyon seed': halcyonSeed,
//     'irradiant pearl': irradiantPearl,
//     'item scrap, yellow': itemScrapYellow,
//     'little disciple': littleDisciple,
//     'mired urn': miredUrn,
//     'molten perforator': moltenPerforator,
//     'pearl': pearl,
//     'planula': planula,
//     'queens gland': queensGland,
//     'shatterspleen': shatterspleen,
//     'titanic knurl': titanicKnurl,
//     'beads of fealty': beadsOfFealty,
//     'brittle crown': brittleCrown,
//     'corpse bloom': corpsebloom,
//     'defiant gouge': defiantGouge,
//     'egocentrism': egocentrism,
//     'essence of heresy': essenceOfHeresy,
//     'eulogy zero': euologyZero,
//     'focused convergence': focusedConvergence,
//     'gesture of the drowned': gestureOfTheDrowned,
//     'hooks of heresy': hooksOfHeresy,
//     'light flux pauldron': lightFluxPauldron,
//     'mercurial rachis': mercurialRachis,
//     'purity': purity,
//     'shaped glass': shapedGlass,
//     'stone flux pauldron': stoneFluxPauldron,
//     'strides of heresy': stridesOfHeresy,
//     'transcendence': transcendence,
//     'visions of heresy': visionsOfHeresy,
//     'benthic bloom': benthicBloom,
//     'encrusted key': encrustedKey,
//     'lost seers lenses': lostSeersLenses,
//     'lysate cell': lysateCell,
//     'needletick': needletick,
//     'newly hatched zoa': newlyHatchedZoea,
//     'plasma shrimp': plasmaShrimp,
//     'pluripotent larva': pluripotentLarva,
//     'polylute': polylute,
//     'safer spaces': saferSpaces,
//     'singularity band': singularityBand,
//     'tentabauble': tentabauble,
//     'voidsent flame': voidsentFlame,
//     'weeping fungus': weepingFungus,
//     'blast shower': blastShower,
//     'disposable missle launcher': disposableMissleLauncher,
//     'eccentric vase': eccentricVase,
//     'executive card': executiveCard,
//     'foreign fruit': foreignFruit,
//     'forgive me please': forgiveMePlease,
//     'fuel array': fuelArray,
//     'gnarled woodsprite': gnarledWoodsprite,
//     'goobo jr.': gooboJr,
//     'gorags opus': goragsOpus,
//     'jade elephant': jadeElephant,
//     'milky chrysalis': milkyChrysalis,
//     'molotov 6-pack': molotov6Pack,
//     'ocular hud': ocularHud,
//     'preon accumulator': preonAccumulator,
//     'primordial cube': primordialCube,
//     'radar scanner': radarScanner,
//     'recycler': recycler,
//     'remote caffeinator': remoteCaffeinator,
//     'royalcapacitor': royalCapacitor,
//     'sawmerang': sawmerang,
//     'super massive leech': superMassiveLeech,
//     'the back up': theBackUp,
//     'trophy hunters tricorn': trophyHuntersTricorn,
//     'trophy hunters tricorn (consumed)': trophyHuntersTricornConsumed,
//     'volcanic egg': volcanicEgg,
//     'effigy of grief': effigyOfGrief,
//     'glowing meteorite': glowingMeteorite,
//     'helfire tincture': helfireTincture,
//     'spinel tonic': spinelTonic,
//     'her biting embrace': herBitingEmbrace,
//     'his reassurance': hisReassurance,
//     'ifrits distinction': ifritsDistinction,
//     "n'khuhana's retort": nkuhanasRetort,
//     'shared design': sharedDesign,
//     'silence between two strikes': silenceBetweentwoStrikes,
//     'spectral circlet': spectralCirclet,
// };



//   app.get('/', (request,response)=>{
//     response.sendFile(__dirname+'/index.html')
// })

// app.get('/api/items',(request,response)=>{
//   response.json(items)
// })

// app.get('/api/items/common',(request,response)=>{

//    if(items[rarity]=='Common')
//    response.json(items)
// })

// app.get('/api/items/uncommon',(request,response)=>{
//    const uncommonItem = request.params.uncommonItem
//    response.json(items[uncommonItem])
// })

// app.get('/api/items/legendary',(request,response)=>{
//    const legendaryItem = request.params.legendaryItem.toLowerCase()
//    response.json(items[legendaryItem])
// })

// app.get('/api/items/boss',(request,response)=>{
//    const bossItem = request.params.bossItem.toLowerCase()
//    response.json(items[bossItem])
// })

// app.get('/api/items/lunar',(request,response)=>{
//    const lunarItem = request.params.lunarItem.toLowerCase()
//    response.json(items[lunarItem])
// })

// app.get('/api/items/equipment',(request,response)=>{
//    const equipmentItem = request.params.equipmentItem.toLowerCase()
//    response.json(items.rarity[equipmentItem])
// })

// app.get('/api/items/lunarEquipment',(request,response)=>{
//    const lunarEquipmentItem = request.params.lunarEquipmentItem.toLowerCase()
//    response.json(items[lunarEquipmentItem])
// })

// app.get('/api/items/eliteEquipment',(request,response)=>{
//    const eliteEquipmentItem = request.params.eliteEquipmentItem.toLowerCase()
//    response.json(items[eliteEquipmentItem])
// })

// app.get('/api/items/:itemName',(request,response)=>{
//   const itemName = request.params.itemName.toLowerCase()
//   console.log(items[itemName])
//     if(items[itemName])
//     response.json(items[itemName])
// })

// app.get('/api/survivors/melee',(request,response)=>{
//   const survivorName = request.params.survivorName.toLowerCase()
//     response.json(survivors[survivorName])
// })

// app.get('/api/survivors/ranged',(request,response)=>{
//   console.log(survivors.survivorName)
//     for(let i=0;i<survivors.length;i++){
//       if(survivors[i].type =='ranged'){
//         response.json(survivors)
//       }
//     }
// })

// app.get('/api/survivors/:survivorName',(request,response)=>{
//   const survivorName = request.params.survivorName.toLowerCase()
//   console.log(survivors[survivorName])
//     if(survivors[survivorName])
//     response.json(survivors[survivorName])
// })

// app.get('/api/survivors',(request,response)=>{
//     response.json(survivors)
    
// })

// app.listen(process.env.PORT|| PORT, ()=>{
//     console.log(`The server is running on ${PORT} LETS GOOO`)
// })