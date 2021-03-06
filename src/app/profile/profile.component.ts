import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from '../models/userProfile';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  totals:{type:string,amount:number}[] = [];

  friends:UserProfile[] = [];

  editing:boolean = false;

  constructor(public contentServer:ContentService, private router:Router) {
    //don't have to even track user now, just use the content service.
    contentServer.GetPosts(contentServer.currentUser.userID).subscribe(data=>{
      //console.log(data);
      for (const post of data.json()) {
        var index = this.totals.findIndex(x=>x.type==post.content.workout);
        if (index < 0){ //not found
          this.totals.push({type:post.content.workout,amount:parseInt(post.content.reps)});
        }
        else{ //found so increment.
          this.totals[index].amount += parseInt(post.content.reps);
        }
      }
    });

    //load friends
    if(this.contentServer.currentUser.friendIDs)
    {
      this.friends = [];
      this.contentServer.currentUser.friendIDs.forEach( 
        (id:string) => this.contentServer.GetUser(id)
                          .subscribe(data=>this.friends.push(data.json()))
      );
    }
    
  }

  ngOnInit() {
  }

  UpdateProfile(){
    this.contentServer.UpdateUserInfo().subscribe();
    this.editing = false;
  }

  AddDetail(dname:string,dvalue:number|string){
    if(!this.contentServer.currentUser.info) //empty objects/arrays are NOT sent by express, so check and init if needed.
    {
      this.contentServer.currentUser.info = [{name:dname,value:dvalue}];
    }
    else{
      this.contentServer.currentUser.info.push({name:dname,value:dvalue});
    }
  }

  //typeof has problems in *ngIf for whatever reason, so make a wrapper for it.
  TypeOfWrapper(val:any){
    return typeof val;
  }

  //more shorthand for use in *ng stuff.
  SameProfile(){
    return this.contentServer.currentUser.userID == this.contentServer.targetUser.userID;
  }

  ViewFriend(id:string){
    this.contentServer.targetUser = this.friends.find(x=>x.userID == id);
    this.router.navigate(['/profile']);
  }
}
