import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllOceanComponent } from './see-all-ocean.component';

describe('SeeAllOceanComponent', () => {
  let component: SeeAllOceanComponent;
  let fixture: ComponentFixture<SeeAllOceanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllOceanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllOceanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
