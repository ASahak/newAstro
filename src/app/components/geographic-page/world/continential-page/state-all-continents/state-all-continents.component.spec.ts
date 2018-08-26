import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAllContinentsComponent } from './state-all-continents.component';

describe('StateAllContinentsComponent', () => {
  let component: StateAllContinentsComponent;
  let fixture: ComponentFixture<StateAllContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateAllContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
