import { Observable } from 'rxjs';
import { of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LogEntry } from './log.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class LogPublisher {
    location: string = "";
    abstract log(record: LogEntry): Observable<boolean>
    abstract clear(): Observable<boolean>;
    abstract dump(): string | null;
}

export class LogConsole extends LogPublisher {
    log(entry: LogEntry): Observable<boolean> {
        // Log to console
        console.log(entry.buildLogString());
        return of(true);
    }
    
    clear(): Observable<boolean> {
        console.clear();
        return of(true);
    }

    dump(): string | null {
        console.log("Copy and paste dump from console.");
        return null;
    }
}

export class LogLocalStorage extends LogPublisher {
    constructor() {
        // Must call `super()`from derived classes
        super();
        
        // Set location
        this.location = "logging";
    }
    
    dump(): string | null {
        let retrieve: string | null = localStorage.getItem(this.location);
        return retrieve;
    }

    // Append log entry to local storage
    log(entry: LogEntry): Observable<boolean> {
        let ret: boolean = false;
        let values: LogEntry[];
        
        try {
            // Get previous values from local storage
            let retrieve: string | null = localStorage.getItem(this.location);
            values = retrieve == null ? [] : JSON.parse(retrieve);
            
            // Add new log entry to array
            values.push(entry);
            
            // Store array into local storage
            localStorage.setItem(this.location, JSON.stringify(values));
            
            // Set return value
            ret = true;
        } catch (ex) {
            // Display error in console
            console.log(ex);
        }
        
        return of(ret);
    }
    
    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        localStorage.removeItem(this.location);
        return of(true);
    }    
}

export class LogSessionStorage extends LogPublisher {
    constructor() {
        // Must call `super()`from derived classes
        super();
        
        // Set location
        this.location = "logging";
    }
    
    dump(): string | null {
        let retrieve: string | null = sessionStorage.getItem(this.location);
        return retrieve;
    }

    // Append log entry to local storage
    log(entry: LogEntry): Observable<boolean> {
        let ret: boolean = false;
        let values: LogEntry[];
        
        try {
            // Get previous values from local storage
            let retrieve: string | null = sessionStorage.getItem(this.location);
            values = retrieve == null ? [] : JSON.parse(retrieve);
            
            // Add new log entry to array
            values.push(entry);
            
            // Store array into local storage
            sessionStorage.setItem(this.location, JSON.stringify(values));
            
            // Set return value
            ret = true;
        } catch (ex) {
            // Display error in console
            console.log(ex);
        }
        
        return of(ret);
    }
    
    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        sessionStorage.removeItem(this.location);
        return of(true);
    }    
}

export class LogWebApi extends LogPublisher {
    constructor(private http: HttpClient) {
        // Must call `super()`from derived classes
        super();
        
        // Set location
        this.location = environment.logApi;
    }
    
    dump(): string | null {
        return null;
    }

    // Add log entry to back end data store
    log(entry: LogEntry): Observable<boolean> {
        const httpOptions: any = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
        };

        return this.http.post(this.location, entry, httpOptions).pipe(map(response => true), catchError(this.handleError));
    }
    
    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        // TODO: Call Web API to clear all values
        return of(true);
    }
    
    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
    }
}

