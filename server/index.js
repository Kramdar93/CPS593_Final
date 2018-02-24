const express = require("express");
var app = express();

const serverName = "localhost";
const port = 8080;

const simple = require("./simpleController");

app.use(simple).listen(port);

console.log("running on http://" + serverName + ":" + port);