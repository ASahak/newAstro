import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulPageEditComponent } from './useful-page-edit.component';

describe('UsefulPageEditComponent', () => {
  let component: UsefulPageEditComponent;
  let fixture: ComponentFixture<UsefulPageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulPageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
