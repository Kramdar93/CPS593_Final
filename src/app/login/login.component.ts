import { Component, OnInit } from '@angular/core';
//TODO: fix crypto import so we stop sending plaintext passwords
//import { Hash, createHash } from "crypto";

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private contentServer:ContentService) { }

  ngOnInit() {
  }

  LogIn(uname:string,pword:string){
    //var hash = createHash('sha256');

    this.contentServer.LogIn(uname,
      pword
      //hash.update( pword ).digest().toString('hex')
    );
  }

  SignUp(uname:string,pword:string){
    //var hash = createHash('sha256');

    this.contentServer.SignUp(uname,
      pword
      //hash.update( pword ).digest().toString('hex')
    );
  }

}
