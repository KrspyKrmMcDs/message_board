import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:63145/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {

      const authResponse = res;

      if (!authResponse[`token`]) {
        return;
      }

      localStorage.setItem(this.TOKEN_KEY, res[`token`]);
      localStorage.setItem(this.NAME_KEY, res[`firstName`]);
      this.router.navigate(['/']);
    });
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }
}
