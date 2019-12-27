import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportCardComponent } from './airport-card.component';

describe('AirportCardComponent', () => {
  let component: AirportCardComponent;
  let fixture: ComponentFixture<AirportCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
