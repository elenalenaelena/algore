import { Component } from '@angular/core';
import { LogService } from './shared/log.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'algore';
  fileUrl: any;

  constructor(private logger: LogService, private sanitizer: DomSanitizer) {
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
}
