//load express, retrieve app object
const express = require("express");
var app = express();

//define server name and port
const serverName = "localhost";
const port = 8080;

//load routing controller from simpleController.js
const simple = require("./simpleController");

//use routing controller to listen on port
app.use(simple).listen(port);

//remind the developer of our url
console.log("running on http://" + serverName + ":" + port);