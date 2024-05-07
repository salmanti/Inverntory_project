import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdLoginregService {


  private baseUrl = "http://localhost:8080/loginregistration";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  
  create(loginreg: AdLoginRegistration) : Observable<any>{  
    return this.http.post<AdLoginRegistration>(this.baseUrl  + '/save',JSON.stringify(loginreg),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<AdLoginRegistration[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdLoginRegistration>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdLoginRegistration>(this.baseUrl + "/get/" + id);  

  } 

  update(brand: AdLoginRegistration) {  
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
