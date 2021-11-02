import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './shared/ticket.model';
import { Subscription } from 'rxjs';
import ticketData from './/shared/sample143.json'
import { faThLarge, faThList} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'algore';
  fileUrl: any;
  faThLarge = faThLarge;
  faThList = faThList;
  view: boolean = true; // true = grid; false = table
  tickets: any[] = ticketData;
  columns: String[];
  filterOptions: String[];

  constructor(private dataService: DataService, private logger: LogService, private sanitizer: DomSanitizer) {
    this.columns = [   
      'index',   
      'date',
      'title',
      'confidency', 
      'category',
      'subtopic',
      'topic',
      'assignee',
      'priority',
    ];
    this.filterOptions = [
      'assignee',
      'category',
      'confidency', 
      'date',
      'index',
      'priority',
      'subtopic',
      'title',
      'topic'
    ];
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

  public toggleView() {
    this.view = !this.view;
  }

  ngOnDestroy() {
  }  

}
