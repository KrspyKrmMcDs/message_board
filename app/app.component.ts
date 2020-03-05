import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello {{ title }}</h1>
    <app-messages></app-messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
}
