import { TestBed, inject } from '@angular/core/testing';

import { ContinentsStatesService } from './continents-states.service';

describe('ContinentsStatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContinentsStatesService]
    });
  });

  it('should be created', inject([ContinentsStatesService], (service: ContinentsStatesService) => {
    expect(service).toBeTruthy();
  }));
});
