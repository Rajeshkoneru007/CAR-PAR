import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { VendorSummary } from '../interface/vendor-summary';

import { VendorSummaryService } from '../services/vendor-summary.service';

@Injectable()
export class VendorSummaryResolverGuard implements Resolve<VendorSummary[]> {
  constructor(private vendorSummaryService:VendorSummaryService){}
  resolve():Observable<VendorSummary[]>{
        return this.vendorSummaryService.getVendorSummary();
    };
  }
