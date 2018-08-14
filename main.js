var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var author = require("./services/authorServices");
var app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://fatih:B13471357b.@ds129541.mlab.com:29541/sogut",
  err => {
    if (!err) {
      console.log("connected to mLab");
    }
  }
),
  app.use("/author", author.router);

app.listen(8080);
