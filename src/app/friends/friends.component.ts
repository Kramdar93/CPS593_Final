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
    contentServer.GetUser("mark").friends.forEach( 
      (name:string) => this.friends.push(this.contentServer.GetUser(name))
    );
    console.log(this.friends.length);
  }

  ngOnInit() {
  }

}
