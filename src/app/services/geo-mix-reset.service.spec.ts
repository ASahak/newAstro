import { TestBed, inject } from '@angular/core/testing';

import { GeoMixResetService } from './geo-mix-reset.service';

describe('GeoMixResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoMixResetService]
    });
  });

  it('should be created', inject([GeoMixResetService], (service: GeoMixResetService) => {
    expect(service).toBeTruthy();
  }));
});
