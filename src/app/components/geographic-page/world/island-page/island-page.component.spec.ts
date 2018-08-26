import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandPageComponent } from './island-page.component';

describe('IslandPageComponent', () => {
  let component: IslandPageComponent;
  let fixture: ComponentFixture<IslandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
