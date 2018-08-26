import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentAreaPageComponent } from './dependent-area-page.component';

describe('DependentAreaPageComponent', () => {
  let component: DependentAreaPageComponent;
  let fixture: ComponentFixture<DependentAreaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DependentAreaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DependentAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
