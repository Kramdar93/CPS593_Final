import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user:UserProfile;

  constructor(contentServer:ContentService) {
    this.user = contentServer.GetUser("someuser");
   }

  ngOnInit() {
  }

}
