import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DataTableModule } from 'primeng/datatable';

import { StatesService } from './services/states/states.service';
import { VendorListService } from './services/vendorList/vendor-list.service';
import { RegionService } from './services/region/region.service';
import { VendorIdService } from './services/vendorId/vendor-id.service';
import { VendorNameService } from './services/vendorName/vendor-name.service';
import { VendorSummaryService } from './vendor-summary-module/services/vendor-summary.service';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';



@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    AutoCompleteModule,
    DataTableModule
  ],
  providers: [StatesService, VendorListService, RegionService, VendorIdService, VendorNameService,VendorSummaryService],

  declarations: [VendorListComponent, VendorSearchComponent]
})
export class VendorModule { }
