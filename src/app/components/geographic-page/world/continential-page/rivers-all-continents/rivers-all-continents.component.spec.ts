import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiversAllContinentsComponent } from './rivers-all-continents.component';

describe('RiversAllContinentsComponent', () => {
  let component: RiversAllContinentsComponent;
  let fixture: ComponentFixture<RiversAllContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiversAllContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiversAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
