import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllSeeComponent } from './edit-all-see.component';

describe('EditAllSeeComponent', () => {
  let component: EditAllSeeComponent;
  let fixture: ComponentFixture<EditAllSeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllSeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
