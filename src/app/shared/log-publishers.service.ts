import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LogPublisher, LogConsole, LogLocalStorage, LogSessionStorage, LogWebApi } from "./log-publishers";

@Injectable()
export class LogPublishersService {
    constructor(private http: HttpClient) {
        // Build publishers arrays
        this.buildPublishers();
    }
    
    // Public properties
    publishers: LogPublisher[] = [];
    
    // Build publishers array
    buildPublishers(): void {
        // Create instance of LogConsole Class
        this.publishers.push(new LogConsole());

        // Create instance of `LogLocalStorage` Class
        //let localStorageLogger = new LogLocalStorage();
        //this.publishers.push(localStorageLogger);

        // Create instance of `LogSessionStorage` Class
        //let sessionStorageLogger = new LogSessionStorage();
        //sessionStorageLogger.clear();
        //this.publishers.push(sessionStorageLogger);

        // Create instance of `LogWebApi` Class
        this.publishers.push(new LogWebApi(this.http));
    }
}
