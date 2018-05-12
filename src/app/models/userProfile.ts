export class UserProfile{

    readonly username:string;
    readonly userID:string;
    readonly picture:string;

    //public weight:number = 0;
    //public height:number = 0;

    public friendIDs:string[];

    public info:{name:string,value:number|string}[];

    public profilePicture:string = "";

    /*
    public signupDate:Date = new Date();
    public birthday:Date = new Date();
    public progress:Progress = new Progress();
    */

    constructor(name:string,tok:string,pic:string){
        this.username = name;
        this.userID = tok;
        this.picture = pic;
    }
} 

export class Progress{

    constructor(){
        
    }

}