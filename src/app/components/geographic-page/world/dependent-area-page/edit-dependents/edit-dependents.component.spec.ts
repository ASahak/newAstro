import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependentsComponent } from './edit-dependents.component';

describe('EditDependentsComponent', () => {
  let component: EditDependentsComponent;
  let fixture: ComponentFixture<EditDependentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDependentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
