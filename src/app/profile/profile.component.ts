import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private contentServer:ContentService) {
    //don't have to even track user now, just use the content service.
   }

  ngOnInit() {
  }

}
