import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopulationFirstComponent } from './edit-population-first.component';

describe('EditPopulationFirstComponent', () => {
  let component: EditPopulationFirstComponent;
  let fixture: ComponentFixture<EditPopulationFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPopulationFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPopulationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
