import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialHomePageComponent } from './continential-home-page.component';

describe('ContinentialHomePageComponent', () => {
  let component: ContinentialHomePageComponent;
  let fixture: ComponentFixture<ContinentialHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
