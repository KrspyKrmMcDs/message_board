import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: ''
})
export class LoginComponent {

  constructor(public auth: AuthService) {}

}
