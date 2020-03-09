import { WebService } from './web.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {

  constructor(public webService: WebService, private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.snapshot.params.name;
    this.webService.getMessages(name);
  }
}
