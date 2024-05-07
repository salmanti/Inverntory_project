import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';

@Injectable({
  providedIn: 'root'
})
export class AdSalesService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/saleDetails"; 
  private baseUrl2 = "http://localhost:8080/sale"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  create(brand: AdSaledetails) : Observable<any>{  
    return this.http.post<AdSaledetails>(this.baseUrl  + '/save',JSON.stringify(brand),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }


  saveSale(brand: AdSale) : Observable<any>{  
    return this.http.post<AdSale>(this.baseUrl2  + '/save',JSON.stringify(brand),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }

  
  getAll() {  
    return this.http.get<AdSaledetails[]>(this.baseUrl +"/getAll");  
  }  
  getAllSales(){
    return this.http.get<AdSale[]>(this.baseUrl2+ "/getAll")
  }
  getAllSalesByStatus(status : String){
    return this.http.get<AdSale[]>(this.baseUrl2+ "/getAllByStatus/"+ status)
  }


  getByStatusDid(status:string ,did:number) {  
    return this.http.get<AdSale[]>(this.baseUrl2 + "/getAllByStatusDid"+'?status='+status+'&did='+did).pipe(
      catchError(this.errorHandler)
    );  

  } 


  getAllbyId(id: number) {  
    return this.http.get<AdSaledetails[]>(this.baseUrl +"/getAllById/" + id);  
  }  
  delete(id?: number) {  
    return this.http.delete<AdSaledetails>(this.baseUrl2 + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<AdSaledetails>(this.baseUrl2 + "/get/" + id);  

  } 
  getSaleById(id: number) {  
    return this.http.get<AdSale>(this.baseUrl2 + "/get/" + id);  

  } 

  update(brand: AdSaledetails) {  
    return this.http.put(this.baseUrl + "/update", brand);  
  }  
   
  
  updateStatus( id:number, status:String): Observable<any> {
  
    console.log('id: ',id, 'status='+ status)
    return this.http.put(this.baseUrl2 + '/updateStatus/'+id+ '?status='+ status ,  this.httpOptions).pipe( 
      catchError(this.errorHandler)
    )
    
  }


  saveAll(purchase: AdSaledetails[]) : Observable<any>{  
    return this.http.post<AdSaledetails[]>(this.baseUrl  + '/saveAll',JSON.stringify(purchase),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
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
