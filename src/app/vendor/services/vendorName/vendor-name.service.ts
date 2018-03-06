import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VendorNameService {

  private vendorNameURL = 'http://10.253.110.170:9080/VIPR-Services/rest/agent/compliance/agentsearch/AUTO';

  constructor(private http:HttpClient) { }

  getVendorName(){
    return this.http.get(this.vendorNameURL);
  }

}
