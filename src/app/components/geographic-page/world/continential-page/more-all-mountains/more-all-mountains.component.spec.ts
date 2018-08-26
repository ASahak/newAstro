import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAllMountainsComponent } from './more-all-mountains.component';

describe('MoreAllMountainsComponent', () => {
  let component: MoreAllMountainsComponent;
  let fixture: ComponentFixture<MoreAllMountainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAllMountainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAllMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
