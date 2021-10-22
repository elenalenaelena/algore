import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Ticket } from './ticket.model';
import ticketData from './sample100.json'

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit, OnDestroy {

  // use BehaviorSubject to be able to modify the data also
  public tickets$ = new BehaviorSubject<Ticket[]>(ticketData);

  constructor() {
  } 

  ngOnInit():void {
    console.log(this.tickets$);
  }

  getTickets(): Observable<Ticket[]>{
    return this.tickets$.asObservable();
  }

  ngOnDestroy(): void {
    this.tickets$.unsubscribe();
  }

}
