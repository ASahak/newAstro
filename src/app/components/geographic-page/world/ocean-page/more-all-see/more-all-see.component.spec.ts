import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAllSeeComponent } from './more-all-see.component';

describe('MoreAllSeeComponent', () => {
  let component: MoreAllSeeComponent;
  let fixture: ComponentFixture<MoreAllSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAllSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAllSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
