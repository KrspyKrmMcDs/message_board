import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private webService: WebService) {}

  model = {
    firstName: '',
    lastName: ''
  };

  ngOnInit() {
    this.webService.getUser().subscribe(res => {
      this.model.firstName = res.firstName;
      this.model.lastName = res.lastName;
    });
  }

  post() {
    this.webService.saveUser(this.model).subscribe();
  }
}
