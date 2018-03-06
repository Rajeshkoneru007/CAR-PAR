import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class RegionService {

  constructor(private http: HttpClient) { }

  public regionURL = 'http://10.253.110.170:9080/VIPR-Services/rest/reference/compliance/regionId/all';
  

  getRegion(){
    return this.http.get(this.regionURL)
    /*TODO:Use reslove to get data first*/
  }

}
