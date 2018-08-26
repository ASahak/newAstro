import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicPageComponent } from './astronomic-page.component';

describe('AstronomicPageComponent', () => {
  let component: AstronomicPageComponent;
  let fixture: ComponentFixture<AstronomicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
