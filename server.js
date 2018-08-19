//NPM packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var fs = require("fs");

//setup Express and PORT
var app = express();
var PORT = process.env.PORT || 3000;

//sets up the Express app to handle data parsing in json
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//including the data from apiRoutes and the HTML from htmlRoutes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


//server listening for connection
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});