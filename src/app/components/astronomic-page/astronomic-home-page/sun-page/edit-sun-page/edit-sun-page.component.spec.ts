import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSunPageComponent } from './edit-sun-page.component';

describe('EditSunPageComponent', () => {
  let component: EditSunPageComponent;
  let fixture: ComponentFixture<EditSunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
