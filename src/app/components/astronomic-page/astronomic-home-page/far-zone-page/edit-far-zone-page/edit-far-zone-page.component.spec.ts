import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarZonePageComponent } from './edit-far-zone-page.component';

describe('EditFarZonePageComponent', () => {
  let component: EditFarZonePageComponent;
  let fixture: ComponentFixture<EditFarZonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFarZonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarZonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
