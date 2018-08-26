import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialNorthAmericaPageComponent } from './continential-north-america-page.component';

describe('ContinentialNorthAmericaPageComponent', () => {
  let component: ContinentialNorthAmericaPageComponent;
  let fixture: ComponentFixture<ContinentialNorthAmericaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialNorthAmericaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialNorthAmericaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
