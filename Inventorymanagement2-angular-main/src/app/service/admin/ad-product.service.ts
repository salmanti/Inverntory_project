import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,Observable, throwError } from 'rxjs';
import { AdProduct } from 'src/app/model/admin/ad-product.model';

@Injectable({
  providedIn: 'root'
})
export class AdProductService {

  private apiURL = "http://localhost:8080/product";
  // private apiURL = "http://localhost:3000/product";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient: HttpClient) { }

getAll():Observable<any>{
  return this.httpClient.get(this.apiURL + '/getAll')
  .pipe(
    catchError(this.errorHandler)
    
  )
}

getByBrand(brandname: String){
return this.httpClient.get<AdProduct[]>(this.apiURL + '/getproduct/'+ brandname, this.httpOptions  ).pipe( 
  catchError(this.errorHandler)
)

}

create(post:AdProduct): Observable<any> {
  console.log(post.product_name);
  return this.httpClient.post(this.apiURL + '/save', post)

  .pipe(
    catchError(this.errorHandler)
  )
} 

find(id:number): Observable<any> {
  
  return this.httpClient.get(this.apiURL + '/get/' + id)

  .pipe(
    catchError(this.errorHandler)
  )
}

findNextValue() {
  
  return this.httpClient.get('http://localhost:8080/product/getNextValue' ).pipe(
    catchError(this.errorHandler)
  )
}



update( post:AdProduct): Observable<any> {
  
  return this.httpClient.put(this.apiURL + '/update' , JSON.stringify(post), this.httpOptions).pipe( 
    catchError(this.errorHandler)
  )
  
}

updateStock( id:number, stock:number ,newtotal:number): Observable<any> {
  
  return this.httpClient.put(this.apiURL + '/updateStock/'+id+ '?quantity='+stock +'&newtotal='+newtotal,  this.httpOptions).pipe( 
    catchError(this.errorHandler)
  )
  
}

delete(id:number){
  return this.httpClient.delete(this.apiURL + '/delete/' + id, this.httpOptions).pipe(
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

getById(id: number) {  
  return this.httpClient.get<AdProduct>(this.apiURL + "/get/" + id);  

} 


}
