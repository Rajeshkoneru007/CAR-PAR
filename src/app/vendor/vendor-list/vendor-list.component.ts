import { Component, OnInit,Input,ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VendorList } from '../model/vendor';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VendorListComponent implements OnInit {

  @Input() vendorResult: VendorList[];
  

  
  constructor(private router:Router) { }
   
  navigateToVendorSummary(){
    this.router.navigate(['vendor-summary']);
  }

  

  ngOnInit() {
  }

}
