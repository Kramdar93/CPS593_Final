import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from "@angular/router";


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    ProfileComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'feed', component:FeedComponent},
      {path:'friends', component:FriendsComponent},
      {path:'profile', component:ProfileComponent},
      {path:'', redirectTo:'feed', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
