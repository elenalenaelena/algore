import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/shared/data.service';
import { LogPublishersService } from 'src/app/shared/log-publishers.service';

@Component({
  selector: 'app-preliminary',
  templateUrl: './preliminary.component.html',
  styleUrls: ['./preliminary.component.sass']
})
export class PreliminaryComponent {

  appState: number = 3;
  formUrl: SafeResourceUrl; 

  constructor(private dataService: DataService, private logPublisher: LogPublishersService, private sanitizer: DomSanitizer) { 
    this.dataService.setAppState(this.appState);
    // TODO: Change to actual pre-filled forms link!
    this.formUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/forms/d/e/1FAIpQLSehfggOwGqnutR4kkl8QKGTnC3MLVervPPYjUNEOlN9l6Roig/viewform?embedded=true&entry.1280742886=" + this.logPublisher.getSessionID());
  }
}
