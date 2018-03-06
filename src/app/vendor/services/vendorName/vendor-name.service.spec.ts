import { TestBed, inject } from '@angular/core/testing';

import { VendorNameService } from './vendor-name.service';

describe('VendorNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorNameService]
    });
  });

  it('should be created', inject([VendorNameService], (service: VendorNameService) => {
    expect(service).toBeTruthy();
  }));
});
