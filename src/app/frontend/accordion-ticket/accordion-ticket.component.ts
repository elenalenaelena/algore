import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Ticket } from '../../shared/ticket.model';

@Component({
  selector: 'app-accordion-ticket',
  templateUrl: './accordion-ticket.component.html',
  styleUrls: ['./accordion-ticket.component.sass']
})
export class AccordionTicketComponent implements OnInit {

  @Input() ticket: any;
  @Input() i: any;
  @Input() assignees: any;
  @Output() newUpdateEvent = new EventEmitter<Ticket>();

  constructor() {    
  }

  ngOnInit(): void { 
  }

  mapStatusToIcon(s: String): String {

    let ng_class: String;
    
    switch(s) {
      case 'Neu': 
        ng_class='status-new'; break;
      case 'In Bearbeitung': 
        ng_class='status-in-progress'; break;
      case 'Abgeschlossen': 
        ng_class='status-done'; break;
      default:
        ng_class='status-new'; break;
    }

    return ng_class;
  }

  /**
 * Mixes two colors (green, pink) according to a specified weight 
 * @param w the weight [0,100] for mixing the colors
 * @return the mixed color
 */
  mixColors(w: any): String {

    let color = "#";
    let green = '3BBCB2';
    let black = '000000';
    let pink = 'EF5DA8';   
    let yellow = 'F4DE51';
    let weight = parseInt(w);      
  
    // for continuous color coding
    /*for(let i = 0; i <= 5; i += 2) { // loop through each of the 3 hex pairs—red, green, and blue
      let v1 = parseInt((green.substr(i, 2)),16),
          v2 = parseInt((pink.substr(i, 2)),16),
          val = (Math.floor(v2 + (v1 - v2) * (weight / 100.0))).toString(16); // combine current channel
  
      while(val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
      
      color += val; // concatenate everything
    }  */
    
    // for discrete color coding
    if(weight < 60)
      color += pink;
    else if (weight >= 60 && weight < 90)
      color += yellow;
    else if (weight >= 90)
      color += green;
    else
      color += black;
      
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
