import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CustomerServices{
    customers:any;
    constructor(private http: Http) {
         
    }

    public getCustomer(): Observable<any> {
      return this.http.get("assets/customers.json").map((response: Response) => response.json());      
                         
    }
    
     
}
