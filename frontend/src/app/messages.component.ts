import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService) {}

  messages = [];

  async ngOnInit() {
    const response: any = await this.webService.getMessages();
    this.messages = response;
    console.log(response);
  }
}
