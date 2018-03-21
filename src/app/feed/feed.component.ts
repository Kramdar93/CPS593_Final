import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts:Post[];

  constructor(contentServer:ContentService) {
    this.posts = contentServer.GetPosts();
  }

  ngOnInit() {
  }

}
