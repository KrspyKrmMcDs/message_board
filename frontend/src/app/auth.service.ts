import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:63145/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  httpOptions = {
    headers: new HttpHeaders(
    {
      Authorization: 'Bearer ' + localStorage.getItem(this.TOKEN_KEY),
      Accept: 'arraybuffer, */*',
      'Content-Type': 'application/json'
    }),
    responseType: 'arraybuffer' as 'json'
  };

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader() {
    return new HttpRequest('HEAD', this.BASE_URL, this.httpOptions);
  }

  login(loginData) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
      this.authenticate(res);
      console.log(res);
    });
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
      this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }

  authenticate(res: object) {
    const authResponse = res;

    if (!authResponse[`token`]) {
        return;
      }

    localStorage.setItem(this.TOKEN_KEY, res[`token`]);
    localStorage.setItem(this.NAME_KEY, res[`firstName`]);
    this.router.navigate(['/']);
  }
}
