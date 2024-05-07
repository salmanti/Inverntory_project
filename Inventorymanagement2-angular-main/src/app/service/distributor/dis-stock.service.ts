import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DisStock } from 'src/app/model/distributor/dis-stock.model';

@Injectable({
  providedIn: 'root'
})
export class DisStockService {

  

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/disproducts"; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  create(brand: DisStock) : Observable<any>{  
    return this.http.post<DisStock>(this.baseUrl  + '/save',JSON.stringify(brand),this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }

  saveByParam(quan:number, pid:number ,did:number,pname:string,brand:string,cate:string,retail:number,mrp:number) {  
    console.log("hit service",quan,pid,did,pname,brand)
    return this.http.post(this.baseUrl  +'/saveByParam'+'?quan='+quan+'&pid='+pid+'&did='+did+'&pname='+pname+'&brand='+brand+'&cate='+cate+'&retail='+retail+'&mrp='+mrp,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }



  getAll() {  
    return this.http.get<DisStock[]>(this.baseUrl +"/getAll");  
  }  

  getAllByDid(did:number) {  
    return this.http.get<DisStock[]>(this.baseUrl +"/getAllById/"+did);      // get all by distributor id
  } 

  delete(id: number) {  
    return this.http.delete<DisStock>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<DisStock>(this.baseUrl + "/get/" + id);  

  } 
  getByPidDid(pid:number ,did:number) {  
    return this.http.get<DisStock>(this.baseUrl + "/getAllByPidDid"+'?pid='+pid+'&did='+did).pipe(
      catchError(this.errorHandler)
    );  

  } 
  getByBrandDid(brand:string ,did:number) {  
    return this.http.get<DisStock[]>(this.baseUrl + "/getAllByBrandDid"+'?brand='+brand+'&did='+did).pipe(
      catchError(this.errorHandler)
    );  

  } 

  update(brand: DisStock) {  
    return this.http.put(this.baseUrl + "/update", brand);  
  }  

  
  updateStock(quan:number, pid:number ,did:number) {  
    return this.http.put(this.baseUrl + "/updateStock"+'?quan='+quan+'&pid='+pid+'&did='+did,this.httpOptions).pipe(
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
