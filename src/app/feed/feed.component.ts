import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post';

import { ContentService } from '../services/content.service';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feed:Post[];

  editing:boolean = false;

  constructor(public contentServer:ContentService,
    private msg:MessageService,
    private router:Router) {
    contentServer.GetFeed().subscribe(data=>this.feed=data.json());
  }

  ngOnInit() {
  }

  SubmitPost(workout:string,reps:number){
    this.contentServer.SubmitPost(workout,reps).subscribe(data=>{
      this.Refresh();
      this.msg.messages.push({text:"Post Submitted!",type:"success"});
    });
  }

  Refresh(){
    this.contentServer.GetFeed().subscribe(data=>this.feed=data.json());
  }

  Vote(pid:number, isUp:boolean){
    this.contentServer.Vote(pid,isUp).subscribe(data=>this.Refresh());
  }

  ViewProfile(id:string){
    this.contentServer.GetUser(id).subscribe(data=>{
      this.contentServer.targetUser = data.json();
      this.router.navigate(['/profile']);
    });
  }
}
