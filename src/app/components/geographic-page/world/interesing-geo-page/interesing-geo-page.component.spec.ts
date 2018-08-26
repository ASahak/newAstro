import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresingGeoPageComponent } from './interesing-geo-page.component';

describe('InteresingGeoPageComponent', () => {
  let component: InteresingGeoPageComponent;
  let fixture: ComponentFixture<InteresingGeoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresingGeoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresingGeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
