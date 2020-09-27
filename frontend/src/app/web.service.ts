import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:63145/api';

  private messageStore: any = [];

  private messageSubject = new Subject();

  messages$ = this.messageSubject.asObservable();

  constructor(private http: HttpClient, private sb: MatSnackBar, private auth: AuthService) {
    this.getMessages(null);
  }

  getMessages(user) {
    user = user ? '/' + user : '';
    this.http.get(this.BASE_URL + '/messages' + user).subscribe(
      response => {
        this.messageStore = response;
        this.messageSubject.next(this.messageStore);
      },
      error => {
        this.handleError('Unable to get messages');
      }
    );
  }

  async postMessage(message: { owner: string; text: string }) {
    try {
      const response: any = await this.http
        .post(this.BASE_URL + '/messages', message)
        .toPromise();
      this.messageStore.push(response);
      this.messageSubject.next(this.messageStore);
    } catch (error) {
      this.handleError('Unable to post message');
    }
  }

  getUser() {
    return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).pipe(map(res => res));
  }

  saveUser(userData) {
    return this.http.post(this.BASE_URL + '/users/me', this.auth.tokenHeader).pipe(map(res => res));
  }

  private handleError(error: string) {
    console.error(error);
    this.sb.open(error, 'close', { duration: 2000 });
  }
}
