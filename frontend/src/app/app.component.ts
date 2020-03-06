import { NewMessageComponent } from './new-message.component';
import { MessagesComponent } from './messages.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <app-new-message></app-new-message>
    <app-messages></app-messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
