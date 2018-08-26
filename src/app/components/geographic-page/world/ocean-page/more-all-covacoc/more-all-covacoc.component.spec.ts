import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAllCovacocComponent } from './more-all-covacoc.component';

describe('MoreAllCovacocComponent', () => {
  let component: MoreAllCovacocComponent;
  let fixture: ComponentFixture<MoreAllCovacocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAllCovacocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAllCovacocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
