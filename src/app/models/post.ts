export class Post{
    constructor(public username:string,
        public userID:number,
        public postID:number,
        public rating:number,
        public content?:string,
        public image?:string,
        public coments?:string[]){}

    public VoteUp(){
        this.rating += 1;
    }

    public VoteDown(){
        this.rating -= 1;
    }
}