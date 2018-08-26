import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePoolsContinentComponent } from './more-pools-continent.component';

describe('MorePoolsContinentComponent', () => {
  let component: MorePoolsContinentComponent;
  let fixture: ComponentFixture<MorePoolsContinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorePoolsContinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePoolsContinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
