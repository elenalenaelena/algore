import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataService } from 'src/app/shared/data.service';
import { LogPublishersService } from 'src/app/shared/log-publishers.service';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.sass']
})
export class FollowUpComponent {

  appState: number = 11;
  formUrl: SafeResourceUrl;

  constructor(private dataService: DataService, private logPublisher: LogPublishersService, private sanitizer: DomSanitizer) { 
    this.dataService.setAppState(this.appState);
    this.formUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/forms/d/e/1FAIpQLSfhNsZGf-QtCfsOBqPXFDcXlrJtaeshBU3oIVN0_i4PgcThSA/viewform?embedded=true&entry.178224731=" + this.logPublisher.getSessionID());
  }
}