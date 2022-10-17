import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient:HttpClient) { 
  }

  private url:string = 'https://634914440b382d796c7d0e8c.mockapi.io/api/product'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  getAll(): Observable<Products> {     
    return this.httpClient.get<Products>(this.url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPostbyId(id:number | any): Observable<Products> {
    return this.httpClient.get<Products>(`${this.url}/${id}`)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 
}
