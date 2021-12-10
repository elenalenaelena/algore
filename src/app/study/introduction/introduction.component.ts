import { Component } from '@angular/core';
import { LogService } from 'src/app/shared/log.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass']
})
export class IntroductionComponent {

  appState: number = 1;

  constructor(private logger: LogService, private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);

    this.logger.log("Session start", [100, null, null]);
  }
}
