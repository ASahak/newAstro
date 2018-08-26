import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomicHomePageComponent } from './astronomic-home-page.component';

describe('AstronomicHomePageComponent', () => {
  let component: AstronomicHomePageComponent;
  let fixture: ComponentFixture<AstronomicHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronomicHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronomicHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
