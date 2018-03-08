import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { RegionService } from '../services/region/region.service';
import { VendorListService } from '../services/vendorList/vendor-list.service';
import { VendorNameService } from '../services/vendorName/vendor-name.service';
import { VendorIdService } from '../services/vendorId/vendor-id.service';

import {SelectItem} from 'primeng/api';
import { State, VendorList, VendorId, Region, VendorName} from '../model/vendor'

@Component({
  selector: 'app-vendor-search',
  templateUrl: './vendor-search.component.html',
  styleUrls: ['./vendor-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VendorSearchComponent implements OnInit {

  isFormControlerEdit ={
    region:false,
    state:false,
    vendorId:false,
    vendorName:false
  }
  isButton ={
    edit:true
  }
  
  states:State[];
  vendorResult:VendorList[];
  regions:Region[];
  vendorid:VendorId[];
  vendorNames:VendorName[]

  selectedRegion:number;
  selectedState:string; 
  selectedVendorName: string;
  selectedVendorId: number;



  vendorSearchForm:FormGroup;

  constructor(
      private fb:FormBuilder,
      private route: ActivatedRoute,
      private vendorListService:VendorListService,
      private regionService:RegionService,
      private VendoridService:VendorIdService,
      private vendorNameService:VendorNameService
    ) {}

  getStates(){
    this.route.data.subscribe((data:{states:State[]}) => {
      this.states = data.states;
    });
  }

  getRegion(){
    this.regionService.getRegion().subscribe((data:Region[]) =>{
      this.regions = data["ids"];
    });
  }

  getVendorId(){
    this.VendoridService.getVendorId().subscribe((data:VendorId[]) =>{
      this.vendorid = data["ids"];
    });
  }

  getVendorNameService(event){
    let query = event.query;
    this.vendorNameService.getVendorName(query).subscribe((vendorNames:VendorName[]) =>{
      this.vendorNames = vendorNames["results"]
      this.vendorNames = this.filterVendorName(query,this.vendorNames)
    })
  }

 filterVendorName(query,vendorNames:any[]):VendorName[]{
      let filtered : any[] = [];
      for(let i=0; i<vendorNames.length; i++){
        let vendorName = vendorNames[i];
        if(vendorName.result.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(vendorName)
        }
      }
      return filtered;
  }

  createVendorSearchForm(){
    this.vendorSearchForm = this.fb.group({
      region:[{value:'',disabled:this.isFormControlerEdit.region}],
      state:[{value:'',disabled:this.isFormControlerEdit.state}],
      vendorName:[{value:'',disabled:this.isFormControlerEdit.vendorName}],
      vendorId:[{value:'',disabled:this.isFormControlerEdit.vendorId}]
      /*TODO:Check whather form model binding to data model*/
    })
  }
  

  submit(){
    this.vendorListService.getVendorList(this.selectedRegion, this.selectedState, this.selectedVendorName, this.selectedVendorId).subscribe((data:VendorList[]) =>{
      this.vendorResult = data;
      this.isFormNotEdit()
      this.vendorSearchForm.get('region').setValue(undefined)
      this.vendorSearchForm.get('state').setValue(undefined)
      this.vendorSearchForm.get('vendorName').setValue(undefined)
      this.vendorSearchForm.get('vendorId').setValue(undefined)
    })
  }

  reset(){
    this.isFormNotEdit()
    this.vendorSearchForm.get('region').setValue(undefined)
    this.vendorSearchForm.get('state').setValue(undefined)
    this.vendorSearchForm.get('vendorName').setValue(undefined)
    this.vendorSearchForm.get('vendorId').setValue(undefined)
}

  isFormNotEdit(){
    this.vendorSearchForm.enable();
    this.isButton.edit = true;
 }

  isEditForm(name){
    this.vendorSearchForm.disable();
    if(this.isFormControlerEdit[name] == false){
      this.vendorSearchForm.get(name).enable();
    }
    this.isButton.edit = false;
  }

  ngOnInit(){
    this.getStates();
    this.getRegion();
    this.getVendorId();
    this.createVendorSearchForm()
  }
}
