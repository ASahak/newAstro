import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAllIcelandsComponent } from './edit-all-icelands.component';

describe('EditAllIcelandsComponent', () => {
  let component: EditAllIcelandsComponent;
  let fixture: ComponentFixture<EditAllIcelandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAllIcelandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAllIcelandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
