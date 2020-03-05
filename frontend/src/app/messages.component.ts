import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  messages: Array<object> = [
    { text: 'some text', owner: 'Tim' },
    { text: 'other message', owner: 'Jane' },
    { text: 'newest message', owner: 'Jim' }
  ];
}
