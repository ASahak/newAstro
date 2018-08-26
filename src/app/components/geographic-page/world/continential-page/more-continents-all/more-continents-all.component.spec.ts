import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreContinentsAllComponent } from './more-continents-all.component';

describe('MoreContinentsAllComponent', () => {
  let component: MoreContinentsAllComponent;
  let fixture: ComponentFixture<MoreContinentsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreContinentsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreContinentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
