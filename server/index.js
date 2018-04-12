//path for filepath operations
const path = require("path");
//load express, retrieve app object
const express = require("express");
const app = express();

//define server name and port
const serverName = "localhost";
const port = 8080;

//load routing controller from simpleController.js
//const simple = require("./simpleController");
//const simple = require("./mvcRouter");
const controller = require("./content/controller");

//use routing controller to listen on port
app
    .use("/",(req,res,next)=>{
        //middleware to allow passing more data
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers","*");
        next();
    })
    
    .use("/",express.static(path.join(__dirname,"../dist/")))
    .use('/content', controller)
    .listen(port);

//remind the developer of our url
console.log("running on http://" + serverName + ":" + port);