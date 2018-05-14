import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";
import { Http,ConnectionBackend, HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from './login/login.component';

import { ContentService } from "./services/content.service";
import { MockContentService } from './services/mock-content.service';
import { MessageService } from "./services/message.service";
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    ProfileComponent,
    FriendsComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'feed', component:FeedComponent},
      {path:'friends', component:FriendsComponent},
      {path:'profile', component:ProfileComponent},
      {path:'', redirectTo:'/feed', pathMatch:'full'}
    ]),
    HttpModule
  ],
  //providers: [{provide:ContentService, useClass:MockContentService}], //use mock as real for now.
  providers: [{provide:ContentService, useClass:ContentService},
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
