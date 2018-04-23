//libraries
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

//library instantiations
const app = express();

//load routing controller from simpleController.js
//const simple = require("./simpleController");
//const simple = require("./mvcRouter");
const controller = require("./content/controller");

//define server name and port
const serverName = "localhost";
const port = 8080;


//use routing controller to listen on port
app
    //third-party middleware
    .use(bodyParser.json())
    .use(bodyParser.urlencoded( {extended:false} ))
    .use("/",(req,res,next)=>{
        //custom middleware to allow passing more data
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers","*");
        next();
    })
    .use("/",express.static(path.join(__dirname,"../dist/"))) //try to find in static files
    .use("/content", controller) //if failed, maybe it's an api call
    .use("/", (req, res, next) => { //otherwise just give the index.html
        res.sendFile(path.join(__dirname, "../dist/index.html"));
    })
    .listen(port);

//remind the developer of our url
console.log("running on http://" + serverName + ":" + port);