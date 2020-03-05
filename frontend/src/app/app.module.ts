import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
