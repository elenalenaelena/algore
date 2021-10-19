import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './frontend/ticket/ticket.component';

import { DataService } from './shared/data.service';
import { LogService } from './shared/log.service';
import { LogPublishersService } from "./shared/log-publishers.service";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    LogService,
    LogPublishersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
