import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContinentsComponent } from './edit-continents.component';

describe('EditContinentsComponent', () => {
  let component: EditContinentsComponent;
  let fixture: ComponentFixture<EditContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
