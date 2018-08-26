import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmMountainComponent } from './edit-arm-mountain.component';

describe('EditArmMountainComponent', () => {
  let component: EditArmMountainComponent;
  let fixture: ComponentFixture<EditArmMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
