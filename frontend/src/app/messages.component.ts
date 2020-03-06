import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor(private webService: WebService) {}

  messages = [
    { text: 'some text', owner: 'Tim' },
    { text: 'other message', owner: 'Jane' }
  ];

  async ngOnInit() {
    const response = await this.webService.getMessages();
    console.log(response.json());
  }
}
