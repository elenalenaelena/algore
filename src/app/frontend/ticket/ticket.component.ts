import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPen, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Ticket } from '../../shared/ticket.model';

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
  @Input() assignees: any;
  @Output() newUpdateEvent = new EventEmitter<Ticket>();

  constructor() { 
  }

  flipSide() {
    this.front = !this.front;
  }

   /**
   * Mixes two colors (green, pink) according to a specified weight 
   * @param w the weight [0,100] for mixing the colors
   * @return the mixed color
   */
  mixColors(w: any): String {

    let color = "#";
    let green = '3bbcb2';
    let pink = 'ef5da8';   
    let weight = parseInt(w);      
  
    for(let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
      let v1 = parseInt((green.substr(i, 2)),16),
          v2 = parseInt((pink.substr(i, 2)),16),
          val = (Math.floor(v2 + (v1 - v2) * (weight / 100.0))).toString(16); // combine current channel
  
      while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
      
      color += val; // concatenate everything
    }      
    return color;
  };

  /**
  * notifies the parent component about changes in the ticket's attribute values
  * @param changes the new data
  */
  updateTicket(changes: any) {

    let t: Ticket = { index: this.ticket.index }; 

    Object.assign(t, changes);
    this.newUpdateEvent.emit(t);
  }

}