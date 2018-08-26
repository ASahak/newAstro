import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialAustraliaPageComponent } from './continential-australia-page.component';

describe('ContinentialAustraliaPageComponent', () => {
  let component: ContinentialAustraliaPageComponent;
  let fixture: ComponentFixture<ContinentialAustraliaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialAustraliaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialAustraliaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
