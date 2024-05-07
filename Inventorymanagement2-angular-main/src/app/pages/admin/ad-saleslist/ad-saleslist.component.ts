import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';

@Component({
  selector: 'app-ad-saleslist',
  templateUrl: './ad-saleslist.component.html',
  styleUrls: ['./ad-saleslist.component.css']
})
export class AdSaleslistComponent implements OnInit{
editEmp(_t26: AdSale) {
throw new Error('Method not implemented.');
}
delProduct(_t26: AdSale) {
throw new Error('Method not implemented.');
}
approved(_t26: AdSale) {
throw new Error('Method not implemented.');
}
   
recevinglist!: AdPurchase[];
saledetailslist2!: AdSaledetails[];
salesList!: AdSale[];
approvedsalesList!: AdSale[];

createform: boolean = false;

constructor( 
   private stockinInvoiceService: AdStockinInvoiceService,
  private route: ActivatedRoute,
  private saleDetailsService: AdSalesService,
  private stockinService: AdStockinService )
            { }
  
  

 ngOnInit(): void {
 
  // this.allsales()
  // this.allsaledetails();
   this.saleapproved()
 }


saleapproved(){
  const status3:string='SaleApproved'
  this.salesbyStatus(status3);
  this.createform=false
}
salepending(){
 const status1:string='SalePending'
  this.salesbyStatus(status1);
  this.createform=true
}

salecancle(){
  const status2:string='SaleCancelled'
  this.salesbyStatus(status2);
  this.createform=false
}

 getByStatus (status: string){ 
  this.stockinService.getByStatus(status ).subscribe((data: AdPurchase[])=>{
    this.recevinglist=data;
  })
 
 }


 salesbyStatus(statusss: string){
  this.saleDetailsService.getAllSalesByStatus(statusss).subscribe((data: AdSale[])=>{
    this.approvedsalesList=data
  })
  
}

 allsaledetails(){
  this.saleDetailsService.getAll().subscribe((data:AdSaledetails[])=>{
    this.saledetailslist2=data;
  })
}

allsales(){
  this.saleDetailsService.getAllSales().subscribe((data: AdSale[])=>{
    this.salesList=data
  })
  
}

delete(product?: number): void {  
  this.saleDetailsService.delete(product).subscribe(data =>{  
      this.salepending();
      
    })  
}
   
  }


