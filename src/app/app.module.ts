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
import { Routes, RouterModule } from '@angular/router';
import { TicketInterfaceComponent } from './frontend/ticket-interface/ticket-interface.component';
import { IntroductionComponent } from './study/introduction/introduction.component';
import { PrivacyComponent } from './study/privacy/privacy.component';
import { ThankYouComponent } from './study/thank-you/thank-you.component';

const appRoutes: Routes = [
  { path: '', component: TicketInterfaceComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    AccordionTicketComponent,
    NormalizeToDomainPipe,
    TrimStringPipe,
    TicketInterfaceComponent,
    IntroductionComponent,
    PrivacyComponent, 
    ThankYouComponent
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
