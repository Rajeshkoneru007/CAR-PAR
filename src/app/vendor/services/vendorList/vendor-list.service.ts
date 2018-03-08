import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VendorListService {

  private vendorListURL = 'http://10.253.110.170:9080/VIPR-Services/rest/agent/compliance/searchagent';
  constructor(private http:HttpClient) { }

  getVendorList(selectedRegion:number, selectedState:string, selectedvendorName:string, selectedVendorId:number){
    var encoded = decodeURI('{}');
    if(selectedRegion !== undefined){      
      let url =`${this.vendorListURL}/${selectedRegion["id"]}/${selectedVendorId = 0}/${selectedState = encoded}/${selectedvendorName = encoded}`
      return this.http.get(url)      
    }else if(selectedState !== undefined){
      let url =`${this.vendorListURL}/${selectedRegion = 0}/${selectedVendorId = 0}/${selectedState["result"]}/${selectedvendorName = encoded}`
      return this.http.get(url)
    }else if(selectedvendorName !== undefined){      
      let url =`${this.vendorListURL}/${selectedRegion = 0}/${selectedVendorId = 0}/${selectedState = encoded}/${selectedvendorName["result"]}`
      return this.http.get(url)
    }else if(selectedVendorId !== undefined){
      let url =`${this.vendorListURL}/${selectedRegion = 0}/${selectedVendorId['id']}/${selectedState = encoded}/${selectedvendorName = encoded}`
      return this.http.get(url)
    }else{
      
      let url =`${this.vendorListURL}`
      return this.http.get(url)
    }

  }

}


