import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanetsPageComponent } from './edit-planets-page.component';

describe('EditPlanetsPageComponent', () => {
  let component: EditPlanetsPageComponent;
  let fixture: ComponentFixture<EditPlanetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
