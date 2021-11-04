import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-ticket',
  templateUrl: './accordion-ticket.component.html',
  styleUrls: ['./accordion-ticket.component.sass']
})
export class AccordionTicketComponent implements OnInit {

  @Input() ticket: any;
  @Input() i: any;

  constructor() { }

  ngOnInit(): void {
  }

}
