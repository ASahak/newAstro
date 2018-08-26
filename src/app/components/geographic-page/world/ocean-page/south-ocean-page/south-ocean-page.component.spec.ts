import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthOceanPageComponent } from './south-ocean-page.component';

describe('SouthOceanPageComponent', () => {
  let component: SouthOceanPageComponent;
  let fixture: ComponentFixture<SouthOceanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthOceanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthOceanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
