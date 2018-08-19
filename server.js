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
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//server listening for connection
app.listen(PORT, function (err) {
    if (err) {
        console.log("didnt work");
    }
  console.log("App listening on PORT " + PORT);
});