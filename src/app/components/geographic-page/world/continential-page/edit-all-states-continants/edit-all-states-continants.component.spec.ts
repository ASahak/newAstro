import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllStatesContinantsComponent } from './edit-all-states-continants.component';

describe('EditAllStatesContinantsComponent', () => {
  let component: EditAllStatesContinantsComponent;
  let fixture: ComponentFixture<EditAllStatesContinantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllStatesContinantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllStatesContinantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
