import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeniaHomePageComponent } from './armenia-home-page.component';

describe('ArmeniaHomePageComponent', () => {
  let component: ArmeniaHomePageComponent;
  let fixture: ComponentFixture<ArmeniaHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeniaHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeniaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
