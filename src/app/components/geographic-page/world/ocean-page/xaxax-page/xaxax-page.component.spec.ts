import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XaxaxPageComponent } from './xaxax-page.component';

describe('XaxaxPageComponent', () => {
  let component: XaxaxPageComponent;
  let fixture: ComponentFixture<XaxaxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XaxaxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XaxaxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
