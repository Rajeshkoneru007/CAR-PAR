import { TestBed, async, inject } from '@angular/core/testing';

import { VendorSummaryResolverGuard } from './vendor-summary-resolver.guard';

describe('VendorSummaryResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorSummaryResolverGuard]
    });
  });

  it('should ...', inject([VendorSummaryResolverGuard], (guard: VendorSummaryResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
