import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AglomerationPageComponent } from './aglomeration-page.component';

describe('AglomerationPageComponent', () => {
  let component: AglomerationPageComponent;
  let fixture: ComponentFixture<AglomerationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AglomerationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AglomerationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
