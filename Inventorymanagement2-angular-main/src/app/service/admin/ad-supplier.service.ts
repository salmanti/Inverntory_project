import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdSupplier } from 'src/app/model/admin/ad-supplier.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdSupplierService {


 
 

  constructor(private http: HttpClient) { }
  // private baseUrl = 'http://localhost:3000/suppplier'; 
  private baseUrl = 'http://localhost:8080/supplier'; 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


 create(suppliert: AdSupplier) {  
    return this.http.post<AdSupplier>(this.baseUrl  +'/save',JSON.stringify(suppliert),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );
  }
  getAll() {  
    return this.http.get<AdSupplier[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdSupplier>(this.baseUrl + "/delete/" + id);  
  }  
  getById(id: number) {  
    return this.http.get<AdSupplier>(this.baseUrl + "/get/" + id).pipe(
      catchError(this.errorHandler)
    );  

  } 

  update(suppliert: AdSupplier) {  
    return this.http.put(this.baseUrl + "/update", suppliert);  
  }  

  getSupplierByName(selectedPost: String) {
    return this.http.get<AdSupplier>(this.baseUrl + '/getsupplier/'+ selectedPost, this.httpOptions  )
    .pipe(catchError(this.errorHandler))
   
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
