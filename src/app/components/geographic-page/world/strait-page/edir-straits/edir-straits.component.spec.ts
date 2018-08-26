import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdirStraitsComponent } from './edir-straits.component';

describe('EdirStraitsComponent', () => {
  let component: EdirStraitsComponent;
  let fixture: ComponentFixture<EdirStraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdirStraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdirStraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
