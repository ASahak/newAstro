import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicPageComponent } from './geographic-page.component';

describe('GeographicPageComponent', () => {
  let component: GeographicPageComponent;
  let fixture: ComponentFixture<GeographicPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeographicPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
