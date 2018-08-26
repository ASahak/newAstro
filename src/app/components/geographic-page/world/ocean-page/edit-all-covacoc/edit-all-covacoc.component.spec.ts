import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllCovacocComponent } from './edit-all-covacoc.component';

describe('EditAllCovacocComponent', () => {
  let component: EditAllCovacocComponent;
  let fixture: ComponentFixture<EditAllCovacocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllCovacocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllCovacocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
