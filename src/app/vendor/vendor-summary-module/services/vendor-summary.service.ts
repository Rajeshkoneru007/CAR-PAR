import { Injectable } from '@angular/core';
import { VendorSummary } from '../interface/vendor-summary';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class VendorSummaryService {

  constructor(private http: HttpClient) { }

  vendorSummaryURL = 'http://www.mocky.io/v2/5a97b0df30000056005c1e72';

  getVendorSummary():Observable<VendorSummary[]>{
    return this.http.get(this.vendorSummaryURL)
    .pipe(
      map((res:Response) =>{
        return res;
      }), catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
