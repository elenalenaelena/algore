import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './shared/ticket.model';
import { Subscription } from 'rxjs';
import ticketData from './/shared/sample143.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'algore';
  fileUrl: any;

  tickets: any[] = ticketData;

  public ticket: Ticket = 
    {
      "index": 7181,
      "created_at": "3. August 2021",
      "message": "Schönen guten Tag Meine abo Mustermann lief bis zum [Datum]über den Konto meiner Mama, da ich die abokarte aber weiterhin verwenden möchte habe ich ein änderungs Vormular aus gefühlt Kartennummer [Zahl].[Zahl]-[Zahl].[Zahl].[Zahl]-[Zahl]",
      "category": "Produkte & Angebote",
      "topic": "Mein Abonnement",
      "subtopic": "Änderung Produkt",
      "priority": 7,
      "status": "Abgeschlossen",
      "deadline": "26. September 2021",
      "channel": "Email",
      "team": "Haltestelleninformation",
      "assignee": "Kundenkontakt",
      "customer": "Jonosch Schuster",
      "contract_no": 1980,
      "transaction_no": 10040,
      "confidence": 81
  }

  constructor(private dataService: DataService, private logger: LogService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  testLog(): void {
      this.logger.log("Test the `log()` Method");
  }

  downloadLog(): void {
    // To make this work, add a link to the view:
    //    <a [href]="fileUrl" download="logs.json">Download File</a>
    let data = this.logger.publishers[1].dump();
    if(data !== null) {
      const blob = new Blob([data], { type: 'application/octet-stream' });    
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    }
  }

  ngOnDestroy() {
  }  

}
