import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmCityComponent } from './edit-arm-city.component';

describe('EditArmCityComponent', () => {
  let component: EditArmCityComponent;
  let fixture: ComponentFixture<EditArmCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
