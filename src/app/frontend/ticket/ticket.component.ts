import { Component, Input } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';
import { Ticket } from 'src/app/shared/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent {

  front: boolean = true;

  @Input() ticket: any;

  constructor() { 
  }

  public flipSide() {
    this.front = !this.front;
  }

}
