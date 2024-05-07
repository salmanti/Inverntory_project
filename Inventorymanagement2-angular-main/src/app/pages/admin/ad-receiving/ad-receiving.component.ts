import { Component, OnInit } from '@angular/core';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';

@Component({
  selector: 'app-ad-receiving',
  templateUrl: './ad-receiving.component.html',
  styleUrls: ['./ad-receiving.component.css']
})
export class AdReceivingComponent implements OnInit{
  
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
  





