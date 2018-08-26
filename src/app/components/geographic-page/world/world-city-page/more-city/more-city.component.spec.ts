import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCityComponent } from './more-city.component';

describe('MoreCityComponent', () => {
  let component: MoreCityComponent;
  let fixture: ComponentFixture<MoreCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
