const express = require("express");
require('dotenv').config
const cors = require("cors");
const app = express();

const allRoute = require("./routes/route");

app.use(cors());

app.use("/", allRoute);
 
module.exports = app;