import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvincePageComponent } from './province-page.component';

describe('ProvincePageComponent', () => {
  let component: ProvincePageComponent;
  let fixture: ComponentFixture<ProvincePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvincePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvincePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
