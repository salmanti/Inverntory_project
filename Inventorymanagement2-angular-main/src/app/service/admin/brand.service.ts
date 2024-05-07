import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/brand"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  create(brand: AdBrand) : Observable<any>{  
    return this.http.post<AdBrand>(this.baseUrl  + '/save',JSON.stringify(brand),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<AdBrand[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdBrand>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdBrand>(this.baseUrl + "/get/" + id);  

  } 

  update(brand: AdBrand) {  
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
