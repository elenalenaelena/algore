import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Ticket } from './shared/ticket.model';
import { Task} from './shared/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @ViewChild("performanceGraph", {read: ElementRef}) performanceGraph: ElementRef | null = null;

  title = 'algore';
  fileUrl: any;  
  amountAppStates!: number
  progress: number = 0;
  appState: number = 0;

  assignees: String[] = [];
  tickets: Ticket[] = []; 
  tasks: Task[] = [];
  taskState: number = 0;
  
  constructor(private dataService: DataService, private logger: LogService, private sanitizer: DomSanitizer, private router: Router ) { 
  }

  ngOnInit(): void {     
    
    this.amountAppStates = this.dataService.getAmountAppStates();
    this.dataService.getAppState()
      .subscribe( x=> this.showProgress(x));
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

  showProgress(state: number): void {    
    
    this.appState = state;  
    let divider = 100/this.amountAppStates; // calculate width (%) of a single progress step
    this.progress = state * divider;        // multiply by current state             

    // on tasks completed, TODO: subscribe to variable in DataService instead and get notfied
    if(this.appState == this.dataService.getTasksTotal()+4) {   
      this.router.navigate(['/follow-up']);
    }
  }

  refreshPage(): void {
    if (window.confirm("Wollen Sie die Seite neu laden? Ihre Eingaben werden verworfen.")) {
      window.location.reload();
    }
  }

}
