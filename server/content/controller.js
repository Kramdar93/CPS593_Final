//load express and save app object
const express = require("express");
const app = express.Router();

const Datastore = require("./datastore");
var dstore = new Datastore();

//export the app object
module.exports = app
    //for /user, get their profile.
    .get("/user", (req, res) => {
        res.send( dstore.GetUser(req.query.userID) );
    })
    .get("/feed", (req,res) => {
        res.send( dstore.GetFeedByUser(req.query.userID) );
    })
    .post("/submit", (req,res)=>{
        dstore.AddPost(req.body.params.userID, req.body.params.post);
        res.send({success:true});//TODO: test for success
    })
    .post("/login", (req,res)=>{ //not really posting data but don't want uname/password in address bar.
        res.send(dstore.LogIn(req.body.params.uname,req.body.params.phash));
    })
    .post("/signup", (req,res)=>{
        res.send(dstore.SignUp(req.body.params.uname,req.body.params.phash));
    })
    .post("/vote", (req,res)=>{
        res.send(req.body.params.isUp? dstore.VoteUp(req.body.params.pid) : dstore.VoteDown(req.body.params.pid))
    })
    .post("/add",(req,res)=>{
        res.send(dstore.AddFriend(req.body.params.userID,req.body.params.friendName));
    })