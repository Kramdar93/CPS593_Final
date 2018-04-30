
function Datastore(){
    
    var Users;  //[{userID,username,[friendIDs]},...]
    var Posts;  //[{userID,content},...]
    var credentials; //[{userID,phash},...]

    var nextID = 0;

    this.SignUp = (name,phash) => {
        var id = nextID++
        this.Users.push( {userID:id, username:name, friends:[]} );
        this.credentials.push({userID:id, phash:phash});
        return {success:true};
    }

    this.LogIn = (name,phash) => {
        //TODO: throw errors
        var id = this.Users.find(x => x.username == name);
        if(!id) return {success:false};
        var found = this.credentials.find(x => x.userID == id && x.phash == phash);
        return found ? found : {success:false};
    }

    this.GetUser = (ID) => {
        var found = this.Users.find(x=> x.userID == ID)
        //TODO: check falsey found
        return found;
    }

    this.GetPostsByUser = (ID) => this.Users.find( x=> x.userID == ID)

    this.GetFeedByUser = (ID) => {
        var result = [];
        this.Users.find(x => x.userID == ID)
            .friends.forEach(friendID => {
                result.push(this.Posts.find(x=> x.userID == friendID));
        });
    }

    this.AddPost = (ID,content)=>{
        this.Posts.push({userID:ID,content:content});
    }
}

module.exports = Datastore;