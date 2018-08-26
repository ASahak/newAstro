import { TestBed, inject } from '@angular/core/testing';

import { ApprecitedResetService } from './apprecited-reset.service';

describe('ApprecitedResetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprecitedResetService]
    });
  });

  it('should be created', inject([ApprecitedResetService], (service: ApprecitedResetService) => {
    expect(service).toBeTruthy();
  }));
});
