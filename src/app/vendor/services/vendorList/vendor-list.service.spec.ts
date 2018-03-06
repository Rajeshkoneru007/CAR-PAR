import { TestBed, inject } from '@angular/core/testing';

import { VendorListService } from './vendor-list.service';

describe('VendorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorListService]
    });
  });

  it('should be created', inject([VendorListService], (service: VendorListService) => {
    expect(service).toBeTruthy();
  }));
});
