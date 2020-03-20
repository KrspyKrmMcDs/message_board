import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:63145/auth';

  constructor(private http: HttpClient) {}

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe();
  }
}
