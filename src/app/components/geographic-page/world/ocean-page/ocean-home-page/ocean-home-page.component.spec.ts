import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanHomePageComponent } from './ocean-home-page.component';

describe('OceanHomePageComponent', () => {
  let component: OceanHomePageComponent;
  let fixture: ComponentFixture<OceanHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
