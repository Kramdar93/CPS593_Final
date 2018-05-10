
//get fs for fileio
const fs = require('fs');

//get current json (bad practice I'd wager)
const prevData = require('./data.json');

function Datastore(){
    
    var Users = prevData.Users;  //[{userID,username,[friendIDs]},...]
    var Posts = prevData.Posts;  //[{userID,unsername,rating,postid,content},...]
    //var credentials = prevData.credentials; //[{userID,phash},...]

    //var nextID = 0;
    var nextPost = prevData.nextPost;

    //creates new blank user with the given name and id and pushes onto the users list.
    this.SignUp = (name,id) => {
        if(Users.find(x=>x.userID == id)) { return {success:false}; } //allow same names, not tokens.
        Users.push( {userID:id, username:name, friendIDs:[], info:[]} );
        return {success:true};
    }

    //Takes a username and password and returns the user object if they match (DEPRECIATED)
    //this function now bypasses credentials and is only used by the outdated login screen.
    //TODO: remove the basic login screen or replace functionality.
    this.LogIn = (name,phash) => {
        //TODO: throw errors
        var usr = Users.find(x => x.username == name);
        if(!usr) return {success:false};
        //var found = credentials.find(x => x.userID == usr.userID && x.phash == phash);
        //return found ? {success:true,user:found} : {success:false};
        return usr.userID == phash ? {success:true,user:usr} : {success:false};
    }

    //returns the user identified by userID if it exists
    this.GetUser = (ID) => {
        var found = Users.find(x=> x.userID == ID)
        //TODO: check falsey found
        return found? found : {success:false};
    }

    //get the posts made by the user with the given id
    this.GetPostsByUser = (ID) => {
        var found = Posts.filter( x=> x.userID == ID)
        return found.length>0? found : {success:false};
    }

    //get a user's feed (friends posts) or all posts if none is specified.
    //TODO: further specialize to each user.
    this.GetFeedByUser = (ID) => {
        if(!ID){return Posts} //no user, get everything.
        var result = [];
        var usr = Users.find(x => x.userID == ID)
        if(!usr) {return {success:false}}
        usr.friendIDs.forEach(friendID => {
                result.push(Posts.filter(x=> x.userID == friendID));
        });
        return result;
    }

    //push a post onto the post list, and associate with the given userID
    this.AddPost = (ID,content)=>{
        var uname = Users.find(x=> x.userID == ID).username;
        Posts.push({userID:ID,postID:nextPost++,username:uname,rating:0,content:content});
    }

    //Increase the rating of the post identified with the given post id by one.
    this.VoteUp = (pid)=>{
        var index = Posts.findIndex(x=>x.postID==pid);
        if(index < 0){ return{success:false}; }
        Posts[index].rating += 1;
        return {success:true};
    }

    //Decrease the rating of the post identified with the given post id by one.
    this.VoteDown = (pid)=>{
        var index = Posts.findIndex(x=>x.postID==pid);
        if(index < 0){ return{success:false}; }
        Posts[index].rating -= 1;
        return {success:true};
    }

    //Add a friend to a user's list of friends.
    //TODO: remove name ambiguity by replacing friendName with friendId.
    this.AddFriend = (userID,friendName)=>{
        var found = Users.find(x=>x.username == friendName);
        var index = Users.findIndex(x=>x.userID == userID);
        if(!found || index < 0) { return {success:false}; }
        if(Users[index].friendIDs.find(x=>x==found.userID)) { return {success:false}; }
        Users[index].friendIDs.push(found.userID);
        return {success:true};
    }

    //Update the 'info' field of a user profile identified by userID
    this.Update = (userID,info) => {
        var index = Users.findIndex(x=>x.userID == userID);
        if(index < 0) { return {success:false}; }
        Users[index].info = info;
        return Users[index];
    }

    //writes the server state to the data.json file. This will be reloaded on startup. 
    //TODO: get an actual database or something to store this information.
    this.Save = () =>{
        fs.open("./server/content/data.json",'w',(err,fd)=>{
            if(err) {throw err;}
            
            fs.write(fd,JSON.stringify({Users:Users,Posts:Posts,nextPost:nextPost}),(err,written,str)=>{
                if (err) {throw err;}
                fs.close(fd,(err)=>{
                    if (err) {throw err;}
                });
            });
        });
        return {success:'maybe?'};
    }
}

module.exports = Datastore;