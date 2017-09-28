import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReviewServices{
    customers:any;
    constructor(private http: Http) {
         
    }

    public getReview(): Observable<any> {
      return this.http.get("assets/reviews.json").map((response: Response) => response.json());      
                         
    }
    
     
}
