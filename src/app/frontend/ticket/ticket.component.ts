import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/shared/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent implements OnInit {

  tickets: Ticket[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
