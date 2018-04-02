import { Injectable } from '@angular/core';
import { ContentService } from './content.service';

import { Post } from "../models/post";
import { UserProfile, Progress } from '../models/userProfile';

@Injectable()
export class MockContentService extends ContentService {

  public GetPosts(){
    return [new Post("mark", 0, "just joined, wut do?"),
      new Post("sarah", 15, "MFW right now.", "https://i.pinimg.com/736x/72/da/9f/72da9f193ca69221a57c2ba5392381d7.jpg"),
      new Post("legday4dayz", 10, "another leg day i guess."),
      new Post("bodybldr", 11, "idk i guess i lift weights thanks"),
      new Post("bodybldr2", -4, "lol i use my alt to upvote my own posts")];
  }

  public GetUser(name:string){
    return new UserProfile(name, 200, 6, ["alice","bob","charlie"], new Date(), new Date(), new Progress());
  }

}
