import { TestBed, inject } from '@angular/core/testing';

import { VendorSummaryService } from './vendor-summary.service';

describe('VendorSummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorSummaryService]
    });
  });

  it('should be created', inject([VendorSummaryService], (service: VendorSummaryService) => {
    expect(service).toBeTruthy();
  }));
});
