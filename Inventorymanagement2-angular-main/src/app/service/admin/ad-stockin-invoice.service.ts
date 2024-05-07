import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Adstockinvoice } from 'src/app/model/admin/ad-stockininvoice.model';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';

@Injectable({
  providedIn: 'root'
})
export class AdStockinInvoiceService {


  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:3000/stockinvoice'; 
  private baseUr2 = 'http://localhost:8080/purchase'; 


  getAll() {  
    return this.http.get<Adstockinvoice[]>(this.baseUrl);  
  }  
    getAllPurchase(){
      return this.http.get<AdPurchase[]>(this.baseUr2 +"/getAll");
    }  
    
    delete(id: number) {  
      return this.http.delete<AdPurchase>(this.baseUr2 + "/delete/" + id); 
  
    }  
    getById(id: number) {  
      return this.http.get<AdPurchase>(this.baseUr2 + "/get/" + id);  
  
    }

}
