import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTicketComponent } from './accordion-ticket.component';

describe('AccordionTicketComponent', () => {
  let component: AccordionTicketComponent;
  let fixture: ComponentFixture<AccordionTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
