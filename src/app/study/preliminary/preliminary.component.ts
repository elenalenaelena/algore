import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-preliminary',
  templateUrl: './preliminary.component.html',
  styleUrls: ['./preliminary.component.sass']
})
export class PreliminaryComponent {

  appState: number = 3;

  constructor(private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
  }
}
