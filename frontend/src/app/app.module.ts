import { NewMessageComponent } from './new-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
