import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCityPageComponent } from './world-city-page.component';

describe('WorldCityPageComponent', () => {
  let component: WorldCityPageComponent;
  let fixture: ComponentFixture<WorldCityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldCityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
