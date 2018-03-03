import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusstopsComponent } from './busstops.component';

describe('BusstopsComponent', () => {
  let component: BusstopsComponent;
  let fixture: ComponentFixture<BusstopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusstopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
