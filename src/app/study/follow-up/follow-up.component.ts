import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.sass']
})
export class FollowUpComponent {

  appState: number = 11;

  constructor(private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
  }
}