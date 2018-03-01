//load express and save app object
const express = require("express");
var app = express.Router();

//load path to appease express
var path = require("path");

//export the app object
module.exports = app
    //unused middleware loader
    .use(function(req, res, next){
        next();
    })
    .use("/dst", express.static("dst"))
    .use("/templates", express.static("templates"))
    //for any path give us a blank template.
    .get("*", function(req, res){
        res.sendFile(path.resolve(__dirname, "../templates/dashboard.html"));
    });