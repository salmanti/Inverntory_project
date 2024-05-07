import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DisCustomer } from 'src/app/model/distributor/dis-customer.model';

@Injectable({
  providedIn: 'root'
})
export class DisCustomerService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/customer"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  
  create(cus: DisCustomer) : Observable<any>{  
    return this.http.post<DisCustomer>(this.baseUrl  + '/save',JSON.stringify(cus),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<DisCustomer[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<DisCustomer>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<DisCustomer>(this.baseUrl + "/get/" + id);  

  } 

  update(brand: DisCustomer) {  
    return this.http.put(this.baseUrl + "/update", brand);  
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
