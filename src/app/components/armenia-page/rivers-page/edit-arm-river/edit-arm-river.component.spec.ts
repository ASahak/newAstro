import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArmRiverComponent } from './edit-arm-river.component';

describe('EditArmRiverComponent', () => {
  let component: EditArmRiverComponent;
  let fixture: ComponentFixture<EditArmRiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArmRiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArmRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
