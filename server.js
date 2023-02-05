const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
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

//Setup for heroku to grab my pictures

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/api", apiRoutes);
// app.use("/")


//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});