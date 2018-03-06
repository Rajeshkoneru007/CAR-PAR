import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorSearchComponent} from './vendor-search/vendor-search.component';
import {StateResolverServices} from './resolverServices/state/state-resolver.services';

const routes: Routes = [
  {
    path:'',
    component:VendorSearchComponent,
    resolve: {
      states: StateResolverServices
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[StateResolverServices]
})
export class VendorRoutingModule { }