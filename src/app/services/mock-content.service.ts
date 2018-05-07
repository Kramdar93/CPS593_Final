import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'; //make sure we have the of() method for observables.
import { tap } from "rxjs/operators";

import { Post } from "../models/post";
import { UserProfile, Progress } from '../models/userProfile';

import { ContentService } from './content.service';

@Injectable()
export class MockContentService extends ContentService {

  currentUser:UserProfile;

  //found out about observable spoofing here:
  //https://stackoverflow.com/questions/35219713/how-to-create-an-observable-from-static-data-similar-to-http-one-in-angular#35219772
  //and documentation for Response/ResponseOptions from angular documentation.
  public GetPosts(ID:number){
    var res = Observable.of(
      new Response(
        new ResponseOptions({
          body:JSON.stringify(
            [new Post("mark",0,0, 0, "just joined, wut do?"),
            new Post("sarah",1,1, 15, "MFW right now.", "https://i.pinimg.com/736x/72/da/9f/72da9f193ca69221a57c2ba5392381d7.jpg"),
            new Post("legday4dayz",2,2, 10, "another leg day i guess."),
            new Post("bodybldr",3,3, 11, "idk i guess i lift weights thanks"),
            new Post("bodybldr2",4,4, -4, "lol i use my alt to upvote my own posts")]
          )
        })
      )
    )
    return res;
  }

  public GetFeed(){
    var res = Observable.of(
      new Response(
        new ResponseOptions({
          body:JSON.stringify(
            [new Post("mark",0,0, 0, "just joined, wut do?"),
            new Post("sarah",1,1, 15, "MFW right now.", "https://i.pinimg.com/736x/72/da/9f/72da9f193ca69221a57c2ba5392381d7.jpg"),
            new Post("legday4dayz",2,2, 10, "another leg day i guess."),
            new Post("bodybldr",3,3, 11, "idk i guess i lift weights thanks"),
            new Post("bodybldr2",4,4, -4, "lol i use my alt to upvote my own posts")]
          )
        })
      )
    )
    return res;
  }

  public GetUser(ID:number){
    var res = Observable.of(
      new Response(
        new ResponseOptions({
          body:JSON.stringify(
            new UserProfile(name, 200, 6, [1,2,3], new Date(), new Date(), new Progress()) 
          )
        })
      )
    )
    //new UserProfile(name, 200, 6, ["alice","bob","charlie"], new Date(), new Date(), new Progress());
    return res;
  }

  public LogIn(uname:string, phash:string){
    //ignore password hash, just make the user given
    return this.GetUser(0).pipe(tap(data=>this.currentUser=data.json()));
  }

  public SignUp(uname:string, phash:string){
    //not saving anything so just give login result.
    return this.LogIn(uname,phash);
  }

}
