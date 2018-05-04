import { Component, OnInit } from '@angular/core';

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

  constructor(private contentServer:ContentService) {
    this.Refresh();
  }

  Refresh(){
    if(this.contentServer.currentUser.friendIDs)
    {
      this.friends = [];
      this.contentServer.currentUser.friendIDs.forEach( 
        (id:number) => this.contentServer.GetUser(id)
                          .subscribe(data=>this.friends.push(data.json()))
      );
    }
  }

  ngOnInit() {
  }

  AddFriend(name:string){
    this.contentServer.AddFriend(name).subscribe( data=>this.Refresh() );
  }

}
