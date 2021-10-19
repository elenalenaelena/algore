import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { } 

  getAssignees() {}

  getCategories() {}

  getChannels () {}

  getSubtopics() {}

  getTopics() {}

  getTicketById(index: number) {    
    // return ticket
  }
  
  getTickets() {
    // return ticket []
  }

}
