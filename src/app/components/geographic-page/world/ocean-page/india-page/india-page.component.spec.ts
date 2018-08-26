import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaPageComponent } from './india-page.component';

describe('IndiaPageComponent', () => {
  let component: IndiaPageComponent;
  let fixture: ComponentFixture<IndiaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
