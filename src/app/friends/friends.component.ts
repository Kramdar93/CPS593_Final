import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfile } from '../models/userProfile';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends:UserProfile[] = [];

  editing:boolean = false;

  constructor(private contentServer:ContentService, private router:Router) {
    this.Refresh();
  }

  //refreshes friend list.
  //TODO: make this take less time for better responsiveness somehow.
  Refresh(){
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

  AddFriend(name:string){
    this.contentServer.AddFriend(name).subscribe( data=>this.Refresh() );
  }

  ViewFriend(id:string){
    this.contentServer.targetUser = this.friends.find(x=>x.userID == id);
    this.router.navigate(['/profile']);
  }
}
