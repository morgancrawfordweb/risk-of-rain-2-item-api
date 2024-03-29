const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const methodOverride = require("method-override");
const session = require("express-session")
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

// //Use for sessions
app.use(session({
  secret: '1tqoBucklemyShoe',
  resave: false,
  saveUninitialized: false
}));


//Use flash messages for errors, info, ect...
app.use(flash());

app.use(cors())


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000, you better catch it!");
});