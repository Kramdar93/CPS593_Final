import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userProfile';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  totals:{type:string,amount:number}[] = [];

  constructor(private contentServer:ContentService) {
    //don't have to even track user now, just use the content service.
    contentServer.GetPosts(contentServer.currentUser.userID).subscribe(data=>{
      console.log(data);
      for (const post of data.json()) {
        var index = this.totals.findIndex(x=>x.type==post.content.workout);
        if (index < 0){ //not found
          this.totals.push({type:post.content.workout,amount:parseInt(post.content.reps)});
        }
        else{ //found so increment.
          this.totals[index].amount += parseInt(post.content.reps);
        }
      }
    });
    
  }

  ngOnInit() {
  }

}
