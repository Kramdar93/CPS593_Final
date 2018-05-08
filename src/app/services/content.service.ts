import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { tap } from "rxjs/operators";

import { Post } from "../models/post";
import { UserProfile, Progress } from '../models/userProfile';

const API:String = "http://localhost:8080/content";

@Injectable()
export class ContentService {

  currentUser:UserProfile;

  constructor(private http:Http) { }

  public GetFeed(){
    //get from server
    //NOTE: calls to this method must call subscribe on them to actually execute. 
    //this is basically a wrapper for http, in this case actually contacting the server.
    return this.http.get(API + "/feed/");
  }

  public GetPosts(ID:string){
    return this.http.get(API + "/user/posts",{params: {userID:ID}}) //get the users posts
  }

  public GetUser(id:string){
    return this.http.get(API + "/user/",{params: {userID:id}});
  }

  public LogIn(uname:string, phash:string){
    return this.http.post(API + "/login", {params:{uname:uname,phash:phash}})
      .pipe(tap(data=>{
        if (data.json().success){
          this.currentUser = data.json().user
        }
      }));
      //there are examples online of map() replacing pipe(tap()) but not sure from what library.
  }

  public SignUp(uname:string, tok:string){
    return this.http.post(API + "/signup", {params:{uname:uname,tok:tok}});
  }

  public SubmitPost(workout:string, reps:number){
    return this.http.post(API + "/submit", {params: {userID:this.currentUser.userID,post:{workout:workout,reps:reps}} });
  }

  public Vote(pid:number,isUp:boolean){
    return this.http.post(API + "/vote", {params: {pid:pid,isUp:isUp} });
  }

  public AddFriend(uname:string){
    return this.http.post(API + "/add", {params: {userID:this.currentUser.userID,friendName:uname} })
      .pipe(tap(data=>this.RefreshUser()));
  }

  private RefreshUser(){
    this.GetUser(this.currentUser.userID).pipe(tap(data=>this.currentUser = data.json())).subscribe();
  }

  public oAuthLogIn(name:string, token:string, pic:string){
    this.currentUser = new UserProfile(name, token, pic);
    this.SignUp(name,token).subscribe(); //use token as password i guess
  }

}
