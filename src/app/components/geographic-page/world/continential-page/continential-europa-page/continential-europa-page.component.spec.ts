import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialEuropaPageComponent } from './continential-europa-page.component';

describe('ContinentialEuropaPageComponent', () => {
  let component: ContinentialEuropaPageComponent;
  let fixture: ComponentFixture<ContinentialEuropaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialEuropaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialEuropaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
