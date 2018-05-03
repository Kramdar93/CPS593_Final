import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feed:Post[];

  editing:boolean = false;

  constructor(public contentServer:ContentService) {
    contentServer.GetFeed().subscribe(data=>this.feed=data.json());
  }

  ngOnInit() {
  }

  SubmitPost(workout:string,reps:number){
    this.contentServer.SubmitPost(workout,reps).subscribe(data=>this.Refresh());
  }

  Refresh(){
    this.contentServer.GetFeed().subscribe(data=>this.feed=data.json());
  }

  Vote(pid:number, isUp:boolean){
    this.contentServer.Vote(pid,isUp).subscribe(data=>this.Refresh());
  }
}
