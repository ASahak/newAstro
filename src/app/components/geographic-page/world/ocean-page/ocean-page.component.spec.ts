import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanPageComponent } from './ocean-page.component';

describe('OceanPageComponent', () => {
  let component: OceanPageComponent;
  let fixture: ComponentFixture<OceanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OceanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
