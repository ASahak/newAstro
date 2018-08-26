import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialAfricaPageComponent } from './continential-africa-page.component';

describe('ContinentialAfricaPageComponent', () => {
  let component: ContinentialAfricaPageComponent;
  let fixture: ComponentFixture<ContinentialAfricaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialAfricaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialAfricaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
