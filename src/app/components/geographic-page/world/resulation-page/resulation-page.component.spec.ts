import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulationPageComponent } from './resulation-page.component';

describe('ResulationPageComponent', () => {
  let component: ResulationPageComponent;
  let fixture: ComponentFixture<ResulationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
