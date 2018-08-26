import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllRiversContinentsComponent } from './edit-all-rivers-continents.component';

describe('EditAllRiversContinentsComponent', () => {
  let component: EditAllRiversContinentsComponent;
  let fixture: ComponentFixture<EditAllRiversContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllRiversContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllRiversContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
