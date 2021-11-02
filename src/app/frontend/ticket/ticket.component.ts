import { Component, Input } from '@angular/core';
import { throwIfEmpty } from 'rxjs/operators';
import { Ticket } from 'src/app/shared/ticket.model';
import { faPen, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.sass']
})
export class TicketComponent {

  faPen = faPen;
  faChevronLeft = faChevronLeft;
  front: boolean = true;

  @Input() ticket: any;

  constructor() { 
  }

  public flipSide() {
    this.front = !this.front;
  }

}
