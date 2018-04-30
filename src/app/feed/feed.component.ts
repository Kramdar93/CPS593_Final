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

  constructor(contentServer:ContentService) {
    contentServer.GetFeed().subscribe(data=>this.feed=data.json());
  }

  ngOnInit() {
  }

}
