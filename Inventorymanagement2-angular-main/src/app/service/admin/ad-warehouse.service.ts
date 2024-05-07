
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdWarehouse } from 'src/app/model/admin/ad-warehouse.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdWarehouseService {

  

  constructor(private http: HttpClient) { }
  // private baseUrl = 'http://localhost:3000/warehouse'; 
  private baseUrl = "http://localhost:8080/warehouse"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 create(wirehouse: AdWarehouse) : Observable<any>{  
    return this.http.post<AdWarehouse>(this.baseUrl  + '/save',JSON.stringify(wirehouse),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<AdWarehouse[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdWarehouse>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdWarehouse>(this.baseUrl + "/get/" + id);  

  } 

  update(warehouse: AdWarehouse) {  
    return this.http.put(this.baseUrl + "/update", warehouse);  
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
