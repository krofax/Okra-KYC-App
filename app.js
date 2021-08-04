const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// require('dotenv/config');
const app = express();

//Import Routes


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes Middleware
app.use("/", allRoute);

module.exports = app;