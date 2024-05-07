import { Component, OnInit } from '@angular/core';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';

@Component({
  selector: 'app-ad-paymentlist',
  templateUrl: './ad-paymentlist.component.html',
  styleUrls: ['./ad-paymentlist.component.css']
})
export class AdPaymentlistComponent implements OnInit{
  recevinglist!: AdPurchase[];

  constructor(  private stockinInvoiceService: AdStockinInvoiceService,
    private stockinService: AdStockinService )
              { }
    status:string='approved'
  
   ngOnInit(): void {
   
    this.getByStatus(this.status);
   }
  
  
   getByStatus (status: string){ 
    this.stockinService.getByStatus(status ).subscribe((data: AdPurchase[])=>{
      this.recevinglist=data;
    })
   
   }
  
  
 
  }


