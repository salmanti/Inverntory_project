import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';
import { catchError, Observable, throwError } from 'rxjs';
import { AdLogin } from 'src/app/model/admin/ad-login.model';

@Injectable({
  providedIn: 'root'
})
export class AdLoginvalidationService {



  

 
  private baseUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  submit (userdata :AdLogin)  {
    
 return this.http.post(this.baseUrl + '/login', JSON.stringify(userdata), this.httpOptions).pipe(
  catchError(this.errorHandler)
)
    


  }
  dislogin(disdata :AdLogin ){
    return this.http.post(this.baseUrl + '/loginDis', JSON.stringify(disdata), this.httpOptions).pipe(
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
