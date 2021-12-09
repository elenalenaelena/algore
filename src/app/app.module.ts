import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataService } from './shared/data.service';
import { LogPublishersService } from "./shared/log-publishers.service";
import { LogService } from './shared/log.service';
import { NormalizeToDomainPipe } from './shared/NormalizeToDomainPipe';
import { ExtractStringPipe } from './shared/ExtractStringPipe';
import { TrimStringPipe } from './shared/TrimStringPipe';

import { AccordionTicketComponent } from './frontend/accordion-ticket/accordion-ticket.component';
import { TaskComponent } from './frontend/task/task.component';
import { TicketComponent } from './frontend/ticket/ticket.component';
import { TicketInterfaceComponent } from './frontend/ticket-interface/ticket-interface.component';

import { IntroductionComponent } from './study/introduction/introduction.component';
import { PrivacyComponent } from './study/privacy/privacy.component';
import { FollowUpComponent } from './study/follow-up/follow-up.component';
import { ThankYouComponent } from './study/thank-you/thank-you.component';
import { PreliminaryComponent } from './study/preliminary/preliminary.component';

const appRoutes: Routes = [
  { path: '', component: TicketInterfaceComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'preliminary', component: PreliminaryComponent },
  { path: 'follow-up', component: FollowUpComponent },
  { path: 'thank-you', component: ThankYouComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    AccordionTicketComponent,
    NormalizeToDomainPipe,
    ExtractStringPipe,
    TrimStringPipe,
    TicketInterfaceComponent,
    IntroductionComponent,
    PrivacyComponent, 
    ThankYouComponent, 
    FollowUpComponent, 
    TaskComponent, 
    PreliminaryComponent
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
