import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VendorListService {

  private vendorListURL = 'http://10.253.110.170:9080/VIPR-Services/rest/agent/compliance/searchagent/0/0/NY/';
  constructor(private http:HttpClient) { }

  getVendorList(selectedValue:string){
    
    if(selectedValue["id"]!=undefined){
      let url =`${this.vendorListURL}/${selectedValue["id"]}`
      console.log(url);
      return this.http.get(url)
     
    }else{
      let url =`${this.vendorListURL}/${selectedValue["result"]}`
       console.log(url);
      return this.http.get(url)
    }

  }

}
