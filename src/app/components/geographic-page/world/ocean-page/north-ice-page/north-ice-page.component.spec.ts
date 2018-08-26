import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthIcePageComponent } from './north-ice-page.component';

describe('NorthIcePageComponent', () => {
  let component: NorthIcePageComponent;
  let fixture: ComponentFixture<NorthIcePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthIcePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthIcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
