import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarZonePageComponent } from './far-zone-page.component';

describe('FarZonePageComponent', () => {
  let component: FarZonePageComponent;
  let fixture: ComponentFixture<FarZonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarZonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarZonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
