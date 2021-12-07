import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.sass']
})
export class PrivacyComponent{

  privacy: boolean= false;
  appState: number = 2;

  constructor(private dataService: DataService ) { 
    this.dataService.setAppState(this.appState);
  }
}

