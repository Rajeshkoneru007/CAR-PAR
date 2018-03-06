import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, map} from 'rxjs/operators';

import {State} from '../../model/vendor';


@Injectable()
export class StatesService {
  
  private statesURL = 'http://10.253.110.170:9080/VIPR-Services/rest/reference/compliance/statesabbreviation/all';
  
  constructor(private http: HttpClient) { }
  
  getStates():Observable<State[]>{
    return this.http
    .get(this.statesURL)
    .pipe(
      map((res:Response) =>{
         return res
      }),
          catchError(this.handleError)
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