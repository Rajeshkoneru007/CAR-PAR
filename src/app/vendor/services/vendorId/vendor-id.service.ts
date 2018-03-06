import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VendorIdService {

  constructor(private http: HttpClient) { }

  public vendorIdURL = 'http://10.253.110.170:9080/VIPR-Services/rest/reference/compliance/agentsId/all';

  getVendorId(){
    return this.http.get(this.vendorIdURL)
  }

}
