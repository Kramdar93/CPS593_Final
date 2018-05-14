//load express and save app object
const express = require("express");
const app = express.Router();

const Datastore = require("./datastore");
var dstore = new Datastore();

//export the app object
module.exports = app
    //each handler is basically a wrapper for the datastore object.
    .get("/user", (req, res) => {
        res.send( dstore.GetUser(req.query.userID) );
    })
    .get("/user/posts", (req, res) => {
        res.send( dstore.GetPostsByUser(req.query.userID) );
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
        res.send(dstore.SignUp(req.body.params.uname,req.body.params.tok,req.body.params.pic));
    })
    .post("/vote", (req,res)=>{ //delegate to the relevant method.
        res.send(req.body.params.isUp? dstore.VoteUp(req.body.params.pid) : dstore.VoteDown(req.body.params.pid))
    })
    .post("/add",(req,res)=>{
        res.send(dstore.AddFriend(req.body.params.userID,req.body.params.friendName));
    })
    .post("/update",(req,res)=>{
        res.send(dstore.Update(req.body.params.userID,req.body.params.info));
    })
    .post("/save", (req,res)=>{
        res.send(dstore.Save());
    })
    .get("/search", (req,res) => {
        res.send( dstore.Search(req.query.term) );
    })