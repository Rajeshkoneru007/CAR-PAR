import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldsetModule } from 'primeng/fieldset';
import { TableModule } from 'primeng/table';

import { VendorSummaryRoutingModule } from './vendor-summary-routing.module';
import { VendorSummaryComponent } from './vendor-summary/vendor-summary.component';
import { VendorSummaryService } from './services/vendor-summary.service';


@NgModule({
  imports: [
    CommonModule,
    VendorSummaryRoutingModule,
    FieldsetModule,
    TableModule
  ],
  declarations: [VendorSummaryComponent],
  providers:[VendorSummaryService]
})
export class VendorSummaryModule { }
