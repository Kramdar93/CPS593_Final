import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts:Post[];

  constructor() {
    this.posts = [{username:"mark", rating:0}];
  }

  ngOnInit() {
  }

}
