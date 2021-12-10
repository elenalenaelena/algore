import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { LogService } from 'src/app/shared/log.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.sass']
})
export class ThankYouComponent {

  appState: number = 12;

  constructor(private logger: LogService, private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
    this.logger.log("Session end", [103, null, null]);
  }
}

