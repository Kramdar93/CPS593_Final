
function Datastore(){
    
    var Users = [];  //[{userID,username,[friendIDs]},...]
    var Posts = [];  //[{userID,content},...]
    var credentials = []; //[{userID,phash},...]

    var nextID = 0;

    this.SignUp = (name,phash) => {
        var id = nextID++
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
        var result = [];
        var usr = Users.find(x => x.userID == ID)
        if(!usr) {return {success:false}}
        usr.friends.forEach(friendID => {
                result.push(Posts.find(x=> x.userID == friendID));
        });
        return result;
    }

    this.AddPost = (ID,content)=>{
        Posts.push({userID:ID,content:content});
    }
}

module.exports = Datastore;