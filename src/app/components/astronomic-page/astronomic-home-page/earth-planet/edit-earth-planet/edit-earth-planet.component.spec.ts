import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEarthPlanetComponent } from './edit-earth-planet.component';

describe('EditEarthPlanetComponent', () => {
  let component: EditEarthPlanetComponent;
  let fixture: ComponentFixture<EditEarthPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEarthPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEarthPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
