import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPlanetComponent } from './earth-planet.component';

describe('EarthPlanetComponent', () => {
  let component: EarthPlanetComponent;
  let fixture: ComponentFixture<EarthPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
