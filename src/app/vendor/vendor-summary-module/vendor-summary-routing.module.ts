import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorSummaryComponent } from './vendor-summary/vendor-summary.component'
import { VendorSummaryResolverGuard } from './reslover/vendor-summary-resolver.guard'
const routes: Routes = [{
  path:'',
  component:VendorSummaryComponent,
  resolve:{
    vendorSummary:VendorSummaryResolverGuard
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[VendorSummaryResolverGuard]
})
export class VendorSummaryRoutingModule { }
