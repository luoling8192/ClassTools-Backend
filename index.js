const express = require("express");

let app = express();
require("./src/app")(app);
