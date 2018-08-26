import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunPageComponent } from './sun-page.component';

describe('SunPageComponent', () => {
  let component: SunPageComponent;
  let fixture: ComponentFixture<SunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
