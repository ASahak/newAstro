import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeniaPageComponent } from './armenia-page.component';

describe('ArmeniaPageComponent', () => {
  let component: ArmeniaPageComponent;
  let fixture: ComponentFixture<ArmeniaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmeniaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeniaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
