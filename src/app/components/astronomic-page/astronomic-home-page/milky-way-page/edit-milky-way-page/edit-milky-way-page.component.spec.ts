import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMilkyWayPageComponent } from './edit-milky-way-page.component';

describe('EditMilkyWayPageComponent', () => {
  let component: EditMilkyWayPageComponent;
  let fixture: ComponentFixture<EditMilkyWayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMilkyWayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMilkyWayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
