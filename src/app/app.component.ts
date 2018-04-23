import { Component } from '@angular/core';

import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private contentServer:ContentService){
    //this is only so angular knows to inject the contentService dependency.
  }
}
