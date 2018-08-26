import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInteresingComponent } from './edit-interesing.component';

describe('EditInteresingComponent', () => {
  let component: EditInteresingComponent;
  let fixture: ComponentFixture<EditInteresingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInteresingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInteresingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
