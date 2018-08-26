import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFarZonePageComponent } from './more-far-zone-page.component';

describe('MoreFarZonePageComponent', () => {
  let component: MoreFarZonePageComponent;
  let fixture: ComponentFixture<MoreFarZonePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreFarZonePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFarZonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
