import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmPoolComponent } from './edit-arm-pool.component';

describe('EditArmPoolComponent', () => {
  let component: EditArmPoolComponent;
  let fixture: ComponentFixture<EditArmPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
