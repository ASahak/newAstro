import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFirstOnePageComponent } from './the-first-one-page.component';

describe('TheFirstOnePageComponent', () => {
  let component: TheFirstOnePageComponent;
  let fixture: ComponentFixture<TheFirstOnePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheFirstOnePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheFirstOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
