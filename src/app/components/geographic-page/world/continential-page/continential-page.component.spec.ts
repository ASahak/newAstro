import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialPageComponent } from './continential-page.component';

describe('ContinentialPageComponent', () => {
  let component: ContinentialPageComponent;
  let fixture: ComponentFixture<ContinentialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
