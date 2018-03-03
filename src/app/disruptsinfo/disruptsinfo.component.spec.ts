import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptsinfoComponent } from './disruptsinfo.component';

describe('DisruptsinfoComponent', () => {
  let component: DisruptsinfoComponent;
  let fixture: ComponentFixture<DisruptsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisruptsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisruptsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
