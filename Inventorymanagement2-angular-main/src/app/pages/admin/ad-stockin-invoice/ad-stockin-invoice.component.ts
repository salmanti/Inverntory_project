import { Component,OnInit } from '@angular/core';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { Adstockinvoice } from 'src/app/model/admin/ad-stockininvoice.model';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';

@Component({
  selector: 'app-ad-stockin-invoice',
  templateUrl: './ad-stockin-invoice.component.html',
  styleUrls: ['./ad-stockin-invoice.component.css']
})
export class AdStockinInvoiceComponent implements OnInit{
 

  createform: boolean = false;

  products !: Adstockinvoice[];
  purchases!: AdPurchase[];
  purchasedata!: AdPurchase ;
  constructor(  private stockinService: AdStockinInvoiceService,
               
      )
               { }

  ngOnInit(): void { 
    this.getallPurchase()
  }
 
  getallPurchase(){
    this.stockinService.getAllPurchase().subscribe((data:AdPurchase[])=>{
      this.purchases=data;
    })
  }
  delete(product: AdPurchase): void {  
    this.stockinService.delete(product.purchase_id).subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

 
 suppname : any = '';
 supphone : any = '';
 supemail : any = '';
 supaddress : any = '';

 date : any = '';
 invoiceid : any = '';
 pname : any = '';
 brname : any = '';
 quantity : any = '';
 total : any = '';
 price : any ='';
 unit : any ='';
 
 idnumber ! :any;

  getById(id: AdPurchase): void {  
        this.idnumber = id.purchase_id;
    this.stockinService.getById(this.idnumber).subscribe(data =>{  
      
      this.purchasedata = data
      
        this.suppname = this.purchasedata.supplier_name ;
        this.supphone=this.purchasedata.supplier_phone;
        this.supaddress=this.purchasedata.supplier_address;
        this.supemail=this.purchasedata.supplier_email;
        this.date=this.purchasedata.date;
      this.invoiceid=this.purchasedata.purchase_id
      this.brname=this.purchasedata.brand_name
      this.total= this.purchasedata.amount
      this.price= this.purchasedata.product_price
      this.pname= this.purchasedata.product_name
      this.unit =this.purchasedata.product_unit
      this.quantity= this.purchasedata.product_quantity
       
      this.ngOnInit()
      this. show()
     
      })  
  }

print(){  
  window.print()
}

  show(){ this.createform =true }
  hide(){ this.createform =false }
  

}
