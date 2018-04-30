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

  constructor(private contentServer:ContentService) {
    contentServer.currentUser.friends.forEach( 
      (name:string) => this.contentServer.GetUser(name)
                        .subscribe(data=>this.friends.push(data.json()))
    );
    console.log(this.friends.length);
  }

  ngOnInit() {
  }

}
