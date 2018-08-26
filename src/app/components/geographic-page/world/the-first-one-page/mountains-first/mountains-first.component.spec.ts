import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsFirstComponent } from './mountains-first.component';

describe('MountainsFirstComponent', () => {
  let component: MountainsFirstComponent;
  let fixture: ComponentFixture<MountainsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
