import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialSouthAmericaPageComponent } from './continential-south-america-page.component';

describe('ContinentialSouthAmericaPageComponent', () => {
  let component: ContinentialSouthAmericaPageComponent;
  let fixture: ComponentFixture<ContinentialSouthAmericaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialSouthAmericaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialSouthAmericaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
