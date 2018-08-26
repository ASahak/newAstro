import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAglomerationsComponent } from './edit-aglomerations.component';

describe('EditAglomerationsComponent', () => {
  let component: EditAglomerationsComponent;
  let fixture: ComponentFixture<EditAglomerationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAglomerationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAglomerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
