import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDay } from './event-day';

describe('EventDay', () => {
  let component: EventDay;
  let fixture: ComponentFixture<EventDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
