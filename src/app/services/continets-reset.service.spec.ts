import { TestBed, inject } from '@angular/core/testing';

import { ContinetsResetService } from './continets-reset.service';

describe('ContinetsResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinetsResetService]
    });
  });

  it('should be created', inject([ContinetsResetService], (service: ContinetsResetService) => {
    expect(service).toBeTruthy();
  }));
});
