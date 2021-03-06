import { Component, OnInit } from '@angular/core';
//TODO: fix crypto import so we stop sending plaintext passwords
//import { Hash, createHash } from "crypto";

import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';

declare var googleyolo:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private contentServer:ContentService, private msg:MessageService) {
    
   }

  ngOnInit() {
  }

  LogIn(uname:string,pword:string){
    //var hash = createHash('sha256');

    this.contentServer.LogIn(uname,
      pword
      //hash.update( pword ).digest().toString('hex')
    ).subscribe(data=>{
      if(!data.json().success)
      {
        //alert user
        this.msg.messages.push({text:"Invalid Login!", type:"danger"});
      }
    }); //don't have to actually do anything with data since contentServer saves current user automatically.
  }

  SignUp(uname:string,pword:string){
    //var hash = createHash('sha256');

    this.contentServer.SignUp(uname,
      pword
      //hash.update( pword ).digest().toString('hex')
    ).subscribe( data=> this.msg.messages.push({text:"Signup Successful!", type:"success"}) );
  }

  GoogleLogin(){
    //cpy/paste from Spring2018 example project.
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
        //"googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "62226211914-m4nfhcsm4t9j22anisu4hn62v4h4p9m8.apps.googleusercontent.com"
        }
      ]
    }).then((credentials:any)=>{
      //console.log(credentials);
      this.contentServer.oAuthLogIn(credentials.displayName,credentials.id,credentials.profilePicture);
    });
  }

}
