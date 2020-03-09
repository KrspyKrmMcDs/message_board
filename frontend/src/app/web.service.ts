import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:63145/api';

  messages = [];

  constructor(private http: HttpClient, private sb: MatSnackBar) {
    this.getMessages();
  }

  async getMessages() {
    try {
      const response: any = await this.http.get(this.BASE_URL + '/messages').toPromise();
      this.messages = response;
    } catch (error) {
      this.handleError('Unable to get messages');
    }
  }

  async postMessage(message: { owner: string; text: string; }) {
    try {
      const response: any = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messages.push(response);
    } catch (error) {
      this.handleError('Unable to post message');
    }
  }

  private handleError(error: string) {
    console.error(error);
    this.sb.open(error, 'close', {duration: 2000});
  }
}
