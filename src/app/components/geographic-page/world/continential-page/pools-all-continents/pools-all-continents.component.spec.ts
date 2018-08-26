import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsAllContinentsComponent } from './pools-all-continents.component';

describe('PoolsAllContinentsComponent', () => {
  let component: PoolsAllContinentsComponent;
  let fixture: ComponentFixture<PoolsAllContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsAllContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
