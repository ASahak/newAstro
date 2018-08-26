import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFarZoneMorePageComponent } from './edit-far-zone-more-page.component';

describe('EditFarZoneMorePageComponent', () => {
  let component: EditFarZoneMorePageComponent;
  let fixture: ComponentFixture<EditFarZoneMorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFarZoneMorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFarZoneMorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
