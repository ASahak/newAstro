import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraitPageComponent } from './strait-page.component';

describe('StraitPageComponent', () => {
  let component: StraitPageComponent;
  let fixture: ComponentFixture<StraitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
