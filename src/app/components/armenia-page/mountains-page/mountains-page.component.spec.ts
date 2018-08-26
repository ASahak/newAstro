import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainsPageComponent } from './mountains-page.component';

describe('MountainsPageComponent', () => {
  let component: MountainsPageComponent;
  let fixture: ComponentFixture<MountainsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
