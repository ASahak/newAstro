import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllContinentsComponent } from './edit-all-continents.component';

describe('EditAllContinentsComponent', () => {
  let component: EditAllContinentsComponent;
  let fixture: ComponentFixture<EditAllContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
