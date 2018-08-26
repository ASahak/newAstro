import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAreaFirstComponent } from './edit-area-first.component';

describe('EditAreaFirstComponent', () => {
  let component: EditAreaFirstComponent;
  let fixture: ComponentFixture<EditAreaFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAreaFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAreaFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
