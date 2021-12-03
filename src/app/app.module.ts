import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './frontend/ticket/ticket.component';

import { DataService } from './shared/data.service';
import { LogService } from './shared/log.service';
import { LogPublishersService } from "./shared/log-publishers.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AccordionTicketComponent } from './frontend/accordion-ticket/accordion-ticket.component';
import { NormalizeToDomainPipe } from './shared/NormalizeToDomainPipe';
import { TrimStringPipe } from './shared/TrimStringPipe';
import { IntroductionComponent } from './introduction/introduction.component';
import { Routes, RouterModule } from '@angular/router';
import { TicketInterfaceComponent } from './ticket-interface/ticket-interface.component';

const appRoutes: Routes = [
  { path: '', component: TicketInterfaceComponent },
  { path: 'introduction', component: IntroductionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    AccordionTicketComponent,
    NormalizeToDomainPipe,
    TrimStringPipe,
    IntroductionComponent,
    TicketInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    LogService,
    LogPublishersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
