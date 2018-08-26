import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkyWayPageComponent } from './milky-way-page.component';

describe('MilkyWayPageComponent', () => {
  let component: MilkyWayPageComponent;
  let fixture: ComponentFixture<MilkyWayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkyWayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkyWayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
