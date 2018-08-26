import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAllRiversContinentsComponent } from './more-all-rivers-continents.component';

describe('MoreAllRiversContinentsComponent', () => {
  let component: MoreAllRiversContinentsComponent;
  let fixture: ComponentFixture<MoreAllRiversContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAllRiversContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAllRiversContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
