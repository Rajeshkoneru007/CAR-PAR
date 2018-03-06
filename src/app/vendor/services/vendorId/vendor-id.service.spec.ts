import { TestBed, inject } from '@angular/core/testing';

import { VendorIdService } from './vendor-id.service';

describe('VendorIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorIdService]
    });
  });

  it('should be created', inject([VendorIdService], (service: VendorIdService) => {
    expect(service).toBeTruthy();
  }));
});
