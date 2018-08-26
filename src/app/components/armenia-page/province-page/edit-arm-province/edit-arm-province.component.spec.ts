import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmProvinceComponent } from './edit-arm-province.component';

describe('EditArmProvinceComponent', () => {
  let component: EditArmProvinceComponent;
  let fixture: ComponentFixture<EditArmProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
