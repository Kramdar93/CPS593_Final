import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private msg:MessageService) { }

  ngOnInit() {
  }

  delete(i:number){
    this.msg.messages.splice(i,1);
  }
}
