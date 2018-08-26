import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMountainsFirstComponent } from './edit-mountains-first.component';

describe('EditMountainsFirstComponent', () => {
  let component: EditMountainsFirstComponent;
  let fixture: ComponentFixture<EditMountainsFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMountainsFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMountainsFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
