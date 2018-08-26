import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsPageComponent } from './planets-page.component';

describe('PlanetsPageComponent', () => {
  let component: PlanetsPageComponent;
  let fixture: ComponentFixture<PlanetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
