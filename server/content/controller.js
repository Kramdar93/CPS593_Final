//load express and save app object
const express = require("express");
var app = express.Router();

var Users = require("./Users");

//export the app object
module.exports = app
    //for /user, get their profile.
    .get("/user/*", (req, res) => {
        res.send(Users.find(x=>x.user.username == req.path.slice(6)).user )
    })
    .get("/feed/*", (req,res) => {
        res.send(Users.find(x=>x.user.username == req.path.slice(6)).posts )
    })