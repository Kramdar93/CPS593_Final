export class UserProfile{

    readonly username:string;

    public weight:number = 0;
    public height:number = 0;

    public friends:string[];

    public profileImage:string = "";

    /*
    public signupDate:Date = new Date();
    public birthday:Date = new Date();
    public progress:Progress = new Progress();
    */

    constructor( name:string, wgt:number, hgt:number, newFriends:string[], public signup:Date, public birthday:Date, public progress:Progress){
        this.username = name;
        this.weight = wgt;
        this.height = hgt;
        this.friends = newFriends;
    }
} 

export class Progress{

    constructor(){
        
    }

}