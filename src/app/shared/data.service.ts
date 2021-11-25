import { Injectable, OnInit} from '@angular/core';
import { Ticket } from './ticket.model';
import ticketData from './balanced_data.json'

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  tickets: Ticket[] = [];

  constructor() {
    this.tickets = ticketData;
  } 

  ngOnInit():void {
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  updateTicket( t: Ticket ) {    

    const i = this.tickets.findIndex(x => x.index === t.index); // index of item to be modified    
    let ticket = this.tickets[i];  // the ticket

    for (var key in t) {
      if(key !== 'index') {                  
          ticket[key] = t[key as keyof typeof ticket]; // type-safe recasting of the key and access it as an attribute        
      }
    }   
  }

}