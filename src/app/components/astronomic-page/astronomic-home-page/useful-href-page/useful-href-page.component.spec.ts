import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulHrefPageComponent } from './useful-href-page.component';

describe('UsefulHrefPageComponent', () => {
  let component: UsefulHrefPageComponent;
  let fixture: ComponentFixture<UsefulHrefPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulHrefPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulHrefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
