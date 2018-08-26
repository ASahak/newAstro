import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllPoolsContinantsComponent } from './edit-all-pools-continants.component';

describe('EditAllPoolsContinantsComponent', () => {
  let component: EditAllPoolsContinantsComponent;
  let fixture: ComponentFixture<EditAllPoolsContinantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllPoolsContinantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllPoolsContinantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
