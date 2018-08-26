import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFirstComponent } from './area-first.component';

describe('AreaFirstComponent', () => {
  let component: AreaFirstComponent;
  let fixture: ComponentFixture<AreaFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
