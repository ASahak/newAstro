import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllMountainsComponent } from './edit-all-mountains.component';

describe('EditAllMountainsComponent', () => {
  let component: EditAllMountainsComponent;
  let fixture: ComponentFixture<EditAllMountainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllMountainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllMountainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
