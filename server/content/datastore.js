
function Datastore(){
    
    var Users = [];  //[{userID,username,[friendIDs]},...]
    var Posts = [];  //[{userID,unsername,rating,postid,content},...]
    var credentials = []; //[{userID,phash},...]

    var nextID = 0;
    var nextPost = 0;

    this.SignUp = (name,phash) => {
        var id = nextID++
        if(Users.find(x=>x.username == name)) { return {success:false}; }
        Users.push( {userID:id, username:name, friends:[]} );
        credentials.push({userID:id, phash:phash});
        return {success:true};
    }

    this.LogIn = (name,phash) => {
        //TODO: throw errors
        var usr = Users.find(x => x.username == name);
        if(!usr) return {success:false};
        var found = credentials.find(x => x.userID == usr.userID && x.phash == phash);
        return found ? {success:true,user:found} : {success:false};
    }

    this.GetUser = (ID) => {
        var found = Users.find(x=> x.userID == ID)
        //TODO: check falsey found
        return found;
    }

    this.GetPostsByUser = (ID) => Users.find( x=> x.userID == ID)

    this.GetFeedByUser = (ID) => {
        if(!ID){return Posts} //no user, get everything.
        var result = [];
        var usr = Users.find(x => x.userID == ID)
        if(!usr) {return {success:false}}
        usr.friends.forEach(friendID => {
                result.push(Posts.find(x=> x.userID == friendID));
        });
        return result;
    }

    this.AddPost = (ID,content)=>{
        var uname = Users.find(x=> x.userID == ID).username;
        Posts.push({userID:ID,postID:nextPost++,username:uname,rating:0,content:content});
    }

    this.VoteUp = (pid)=>{
        var index = Posts.findIndex(x=>x.postID==pid);
        if(index < 0){ return{success:false}; }
        Posts[index].rating += 1;
        return {success:true};
    }

    this.VoteDown = (pid)=>{
        var index = Posts.findIndex(x=>x.postID==pid);
        if(index < 0){ return{success:false}; }
        Posts[index].rating -= 1;
        return {success:true};
    }
}

module.exports = Datastore;