import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationFirstComponent } from './population-first.component';

describe('PopulationFirstComponent', () => {
  let component: PopulationFirstComponent;
  let fixture: ComponentFixture<PopulationFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
