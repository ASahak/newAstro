import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialAsiaPageComponent } from './continential-asia-page.component';

describe('ContinentialAsiaPageComponent', () => {
  let component: ContinentialAsiaPageComponent;
  let fixture: ComponentFixture<ContinentialAsiaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialAsiaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialAsiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
