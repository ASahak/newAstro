import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlanticPageComponent } from './atlantic-page.component';

describe('AtlanticPageComponent', () => {
  let component: AtlanticPageComponent;
  let fixture: ComponentFixture<AtlanticPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlanticPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlanticPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
