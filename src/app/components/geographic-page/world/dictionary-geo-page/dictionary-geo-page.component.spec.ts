import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryGeoPageComponent } from './dictionary-geo-page.component';

describe('DictionaryGeoPageComponent', () => {
  let component: DictionaryGeoPageComponent;
  let fixture: ComponentFixture<DictionaryGeoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryGeoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryGeoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
