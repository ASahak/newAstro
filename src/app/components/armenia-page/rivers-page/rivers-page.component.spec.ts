import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiversPageComponent } from './rivers-page.component';

describe('RiversPageComponent', () => {
  let component: RiversPageComponent;
  let fixture: ComponentFixture<RiversPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiversPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiversPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
