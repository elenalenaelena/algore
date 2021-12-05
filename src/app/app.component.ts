import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Ticket } from './shared/ticket.model';
import { faThLarge, faThList, faSortAmountUp, faSortAmountDown, faTicketAlt, faChartLine} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy{
  @ViewChild("performanceGraph", {read: ElementRef}) performanceGraph: ElementRef | null = null;

  assignees: String[] = [];
  title = 'algore';
  fileUrl: any;
  tickets: Ticket[] = []; 
  progress: number = 25;

  faSortAmountDown = faSortAmountDown;
  faSortAmountUp = faSortAmountUp;
  faThLarge = faThLarge;
  faThList = faThList;
  faTicketAlt = faTicketAlt;
  faChartLine = faChartLine;

  ticketView: boolean = true; // true = grid; false = table
  filterOptions: String[]; // contains all possible column names for sorting
  reverse: boolean; // indicates the sort order (ascending | descending)
  sorting: String;  // holds the column name according to which the data are sorted  
  view: boolean = true; // true = ticket view; false = dashboard view  

  constructor(private dataService: DataService, private logger: LogService, private sanitizer: DomSanitizer) {

    this.filterOptions = [
      'assignee',
      'created_at',
      'index',
      'category',
      'confidence', 
      'priority',
      'status',
      'subtopic',
      'topic'
    ];
    this.sorting = 'created_at'; // default: sort by creation date 
    this.reverse = false;        // defualt: ascending order
    this.tickets = this.dataService.getTickets();
  }

  ngOnInit(): void {
    this.sortBy(this.sorting);    
    this.assignees = this.getKeys(this.groupBy(this.tickets, "assignee")); 
  }

   /**
   * get distinct array keys, order ASC
   * @param arr: the array
   * @return string array containing the keys
   */
  getKeys(arr: any): String[] {

    let keys: String[] = Object.keys(arr);
    keys.sort();

    return keys;
  }

   /**
   * groups an array according to a given criteria
   * @param arr: the array
   * @param criteria: the attribute to group the array by
   * @return the groups
   */
  groupBy(arr:any, criteria: any) { 

    const groups = arr.reduce(function (acc:any , currentValue:any) {

      if (!acc[currentValue[criteria]]) {
        acc[currentValue[criteria]] = [];
      }
      acc[currentValue[criteria]].push(currentValue);
      return acc;

    }, {});
    return groups;
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

  makeProgress(): number {

    /*let bar: HTMLElement = document.querySelector(".progress-bar") as HTMLElement;
    
    bar.style.width = this.progress + "%"; 
    bar.innerText = this.progress + "%";  */
    return this.progress;

  }

  refreshPage(): void {
    window.location.reload();
  }

  toggleTicketView(): void {
    this.ticketView = !this.ticketView;
    this.logger.log('Toggled ticket view: ' + this.ticketView, [3, null, this.ticketView ? 105 : 104]);
  }

  toggleSortOrder(): void {
    this.reverse = !this.reverse; 
    this.sortBy(this.sorting);
    this.logger.log('Toggled sort order: ' + this.reverse, [5, null, this.reverse ? 100 : 101]);
  }

  togglePerformance(): void {
    let status: number = this.performanceGraph?.nativeElement.offsetHeight > 0 ? 100 : 101;
    this.logger.log('Toggled performance view: ' + status, [4, null, status]);
  }

  sortByFilter(filterOption: String): void {
    this.sortBy(filterOption);
    this.logger.log('Sorting by filter: ' + (10 + this.filterOptions.indexOf(filterOption)), [6, null, (10 + this.filterOptions.indexOf(filterOption))]);
  }

  /**
   * passes the sorting value to the actual sorting function, manages sorting order, and updates the ticket data accordingly
   * @param item the current dropdown value to sort by
   */
  sortBy(val: any){

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
  getSortOrder(prop: any) {    
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
   * contains a small hard-coded dictionary to translate the column names in the data
   * @param word the word to translate
   * @return the german translation
   */  
  getTranslationDE(word: String): String {

    let t: String = '';

    switch(word){
      case 'assignee':
        t = 'Bearbeiter:in'; break;
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

  updateTickets(t: Ticket) {

    this.dataService.updateTicket(t);
    
  }

  ngOnDestroy() {
  }  

}
