import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './shared/ticket.model';
import { Subscription } from 'rxjs';
import ticketData from './/shared/sample143.json'
import { faThLarge, faThList, faSortAmountUp, faSortAmountDown} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'algore';
  fileUrl: any;
  faSortAmountDown = faSortAmountDown;
  faSortAmountUp = faSortAmountUp;
  faThLarge = faThLarge;
  faThList = faThList;
  view: boolean = true; // true = grid; false = table
  tickets: any[] = ticketData;
  filterOptions: String[]; // contains all possible column names for sorting
  public sorting: String;  // holds the column name according to which the data are sorted
  reverse: boolean; // indicates the sort order (ascending | descending)

  constructor(private dataService: DataService, private logger: LogService, private sanitizer: DomSanitizer) {

    this.filterOptions = [
      'assignee',
      'category',
      'confidence', 
      'created_at',
      'index',
      'priority',
      'status',
      'subtopic',
      'topic'
    ];
    this.sorting = 'created_at'; // default: sort by creation date 
    this.reverse = false;        // defualt: ascending order
  }

  ngOnInit(): void { }

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

  public refreshPage(){
    window.location.reload();
  }

  /**
   * Passes the sorting value to the actual sorting function, manages sorting order, and updates the ticket data
   * @param item the current dropdown value to sort by
   */
  public sortBy(val: any){

    this.sorting = val;

    !this.reverse ? 
      this.tickets.sort(this.getSortOrder(val)) : 
      this.tickets.sort(this.getSortOrder(val)).reverse();    
  }

  /**
   * helper function, compares data items one by one for sorting
   * @param prop the current dropdown value to sort by
   * @return the result of the comparison
   */
  public getSortOrder(prop: any) {    
    return function(a:any , b:any) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  }   

  /**
   * @param word the word to translate
   * @return the german translation
   */  
  getTranslationDE(word: String): String {

    let t: String = '';

    switch(word){
      case 'assignee':
        t = 'Abteilung'; break;
      case 'created_at':
        t = 'Datum'; break;
      case 'index':
        t = 'ID'; break;
      case 'category':
        t = 'Kategorie'; break;
      case 'confidence':
       t = 'Konfidenz'; break;
      case 'priority':
        t = 'Priorität'; break;
      case 'status':
        t = 'Status'; break;    
      case 'topic':
       t = 'Thema'; break;
      case 'subtopic':
       t = 'Unterthema'; break;      
    }
    
    return t;

  }

  ngOnDestroy() {
  }  

}
