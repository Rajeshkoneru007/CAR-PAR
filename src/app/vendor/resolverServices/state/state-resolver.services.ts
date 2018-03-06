import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';

import { Resolve } from '@angular/router';

import {StatesService} from '../../services//states/states.service';

import {State} from '../../model/vendor';

@Injectable()
export class StateResolverServices implements Resolve<State[]>{
    constructor(private statesService:StatesService){}
    
    resolve():Observable<State[]>{
            return this.statesService.getStates();
    }
}