import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdCategories } from 'src/app/model/admin/ad-categories.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/categories"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  create(cat: AdCategories) : Observable<any>{  
    return this.http.post<AdCategories>(this.baseUrl  + '/save',JSON.stringify(cat),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<AdCategories[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdCategories>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdCategories>(this.baseUrl + "/get/" + id);  

  } 

  update(cat: AdCategories) {  
    return this.http.put(this.baseUrl + "/update", cat);  
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
