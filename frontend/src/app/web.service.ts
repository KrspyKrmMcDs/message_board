import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

  BASE_URL = 'http://localhost:63145/api';

  messages = [];

  constructor(private http: HttpClient) {
    this.getMessages();
  }

  async getMessages() {
   const response: any = await this.http.get(this.BASE_URL + '/messages').toPromise();
   this.messages = response;
  }

  async postMessage(message) {
    const response: any = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
    this.messages.push(response);
  }
}
