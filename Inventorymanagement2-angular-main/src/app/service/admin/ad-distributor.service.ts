import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdDistributorService {

 

  constructor(private http: HttpClient) { }
  // private baseUrl = 'http://localhost:3000/distributor'; 
  private baseUrl = "http://localhost:8080/distributor";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 create(distributor: AdDistributor) {  
    return this.http.post<AdDistributor>(this.baseUrl +"/save",JSON.stringify(distributor),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    ); 
  }
  getAll() {  
    return this.http.get<AdDistributor[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdDistributor>(this.baseUrl + "/delete/" + id);  
  }  
  getById(id: number) {  
    return this.http.get<AdDistributor>(this.baseUrl + "/get/" + id);  

  } 

  update(dis: AdDistributor) {  
    return this.http.put(this.baseUrl + "/update", dis);  
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
