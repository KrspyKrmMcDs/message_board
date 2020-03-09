import { NewMessageComponent } from './new-message.component';
import { MessagesComponent } from './messages.component';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';


@Component({
  selector: 'app-home',
  template: `
    <app-new-message></app-new-message>
    <app-messages></app-messages>
  `,
})
export class HomeComponent {}
