import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBusStopComponent } from './selected-bus-stop.component';

describe('SelectedBusStopComponent', () => {
  let component: SelectedBusStopComponent;
  let fixture: ComponentFixture<SelectedBusStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBusStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBusStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
