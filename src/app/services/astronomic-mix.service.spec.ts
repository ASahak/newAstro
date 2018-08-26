import { TestBed, inject } from '@angular/core/testing';

import { AstronomicMixService } from './astronomic-mix.service';

describe('AstronomicMixService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AstronomicMixService]
    });
  });

  it('should be created', inject([AstronomicMixService], (service: AstronomicMixService) => {
    expect(service).toBeTruthy();
  }));
});
