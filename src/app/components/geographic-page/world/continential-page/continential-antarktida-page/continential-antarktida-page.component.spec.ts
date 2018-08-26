import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentialAntarktidaPageComponent } from './continential-antarktida-page.component';

describe('ContinentialAntarktidaPageComponent', () => {
  let component: ContinentialAntarktidaPageComponent;
  let fixture: ComponentFixture<ContinentialAntarktidaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentialAntarktidaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentialAntarktidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
