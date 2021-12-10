import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.sass']
})
export class ThankYouComponent {

  appState: number = 12;

  constructor(private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
  }
}

