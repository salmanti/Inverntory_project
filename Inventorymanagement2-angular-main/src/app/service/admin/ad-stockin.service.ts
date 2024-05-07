import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { catchError, Observable, throwError } from 'rxjs';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';

@Injectable({
  providedIn: 'root'
})
export class AdStockinService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/purchase"; 
  private baseUr2 = "http://localhost:8080/saleDetails"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  
  create(purchase: AdPurchase) : Observable<any>{  
    return this.http.post<AdPurchase>(this.baseUrl  + '/save',JSON.stringify(purchase),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }


  saveAll(purchase: AdPurchase[]) : Observable<any>{  
    return this.http.post<AdPurchase[]>(this.baseUrl  + '/saveAll',JSON.stringify(purchase),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }



  
  getAll() {  
    return this.http.get<AdPurchase[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<AdPurchase>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdPurchase>(this.baseUrl + "/get/" + id);  

  } 

  getByStatus(statuss: string) {  
    return this.http.get<AdPurchase[]>(this.baseUrl + "/status/" + statuss );  

  } 

  update(purchase: AdPurchase) {  
    return this.http.put(this.baseUrl + "/update", purchase);  
  }  


  updateStatus( id:number, status:String): Observable<any> {
  
    console.log('id: ',id, 'status='+ status)
    return this.http.put(this.baseUrl + '/updateStatus/'+id+ '?status='+ status ,  this.httpOptions).pipe( 
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
