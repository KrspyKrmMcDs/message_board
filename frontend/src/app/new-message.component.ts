import { WebService } from './web.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html'
})
export class NewMessageComponent {

  constructor(private webService: WebService) {}

  message = {
    owner: '',
    text: ''
  };

  post() {
    this.webService.postMessage(this.message);
  }
}
