import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsAllContinentsComponent } from './mountains-all-continents.component';

describe('MountainsAllContinentsComponent', () => {
  let component: MountainsAllContinentsComponent;
  let fixture: ComponentFixture<MountainsAllContinentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainsAllContinentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainsAllContinentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
