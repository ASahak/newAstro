import { TestBed, inject } from '@angular/core/testing';

import { RecetService } from './recet.service';

describe('RecetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetService]
    });
  });

  it('should be created', inject([RecetService], (service: RecetService) => {
    expect(service).toBeTruthy();
  }));
});
