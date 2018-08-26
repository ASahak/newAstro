import { TestBed, inject } from '@angular/core/testing';

import { OceanResetService } from './ocean-reset.service';

describe('OceanResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OceanResetService]
    });
  });

  it('should be created', inject([OceanResetService], (service: OceanResetService) => {
    expect(service).toBeTruthy();
  }));
});
