import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.sass']
})
export class IntroductionComponent {

  appState: number = 1;

  constructor(private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
  }
}
