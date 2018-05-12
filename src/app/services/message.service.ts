import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  public messages:{text:string,type:string}[]=[];

  constructor() { }

}
