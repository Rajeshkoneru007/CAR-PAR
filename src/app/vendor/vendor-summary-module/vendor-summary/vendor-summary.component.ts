import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendorSummary } from '../interface/vendor-summary'

@Component({
  selector: 'app-vendor-summary',
  templateUrl: './vendor-summary.component.html',
  styleUrls: ['./vendor-summary.component.css']
})
export class VendorSummaryComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  vendorSummary:VendorSummary[]
  

  getVendorSummary(){
    this.route.data.subscribe(data =>{
      this.vendorSummary = data.vendorSummary;
    })
  }

  ngOnInit() {
    this.getVendorSummary();    
  }
}
