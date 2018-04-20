import { Injectable } from '@angular/core';

import { Post } from "../models/post";
import { UserProfile, Progress } from '../models/userProfile';

@Injectable()
export class ContentService {

  currentUser:UserProfile;

  constructor() { }

  public GetPosts(){
    //actually look up in datastore or something
    return [new Post("TODO: load posts from somewhere", 0)];
  }

  public GetUser(name:string){
    //actually look up in datastore or something
    return new UserProfile("TODO: load posts from somewhere", 0, 0, [], new Date(), new Date(), new Progress());
  }

  public LogIn(uname:string, phash:string){

  }

  public SignUp(uname:string, phash:string){
    
  }

}
