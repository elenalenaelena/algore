import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketInterfaceComponent } from './ticket-interface.component';

describe('TicketInterfaceComponent', () => {
  let component: TicketInterfaceComponent;
  let fixture: ComponentFixture<TicketInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
