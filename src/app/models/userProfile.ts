export class UserProfile{

    readonly username:string;
    readonly userID:number;

    public weight:number = 0;
    public height:number = 0;

    public friendIDs:number[];

    public profileImage:string = "";

    /*
    public signupDate:Date = new Date();
    public birthday:Date = new Date();
    public progress:Progress = new Progress();
    */

    constructor( name:string, wgt:number, hgt:number, newFriends:number[], public signup:Date, public birthday:Date, public progress:Progress){
        this.username = name;
        this.weight = wgt;
        this.height = hgt;
        this.friendIDs = newFriends;
    }
} 

export class Progress{

    constructor(){
        
    }

}