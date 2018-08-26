import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOceanHomePageComponent } from './edit-ocean-home-page.component';

describe('EditOceanHomePageComponent', () => {
  let component: EditOceanHomePageComponent;
  let fixture: ComponentFixture<EditOceanHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOceanHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOceanHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
