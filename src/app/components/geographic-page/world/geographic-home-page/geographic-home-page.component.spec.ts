import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicHomePageComponent } from './geographic-home-page.component';

describe('GeographicHomePageComponent', () => {
  let component: GeographicHomePageComponent;
  let fixture: ComponentFixture<GeographicHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeographicHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
