import { Component, OnInit } from '@angular/core';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdStockinInvoiceService } from 'src/app/service/admin/ad-stockin-invoice.service';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';

@Component({
  selector: 'app-ad-stockinpending',
  templateUrl: './ad-stockinpending.component.html',
  styleUrls: ['./ad-stockinpending.component.css']
})
export class AdStockinpendingComponent implements OnInit{



  purchases!: AdPurchase[];
  pendingdata!:AdPurchase[];

  constructor(  private stockinInvoiceService: AdStockinInvoiceService,
   private stockinService: AdStockinService,
    private addProductService: AdProductService )
             { }
   status:string='pending'

  ngOnInit(): void {
  
    this.getByStatus(this.status);
  }

  getByStatus (status: string){ 
    this.stockinService.getByStatus(status ).subscribe((data: AdPurchase[])=>{
      this.pendingdata=data;
    })
   
   }



  getallPurchase(){
    this.stockinInvoiceService.getAllPurchase().subscribe((data:AdPurchase[])=>{
      this.purchases=data;
    })
  }

  delete(product: AdPurchase): void {  
    this.stockinService.delete(product.purchase_id).subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  purchaseId:number=0;
  responce!: any;
   statusdata! : any;
   purchasequantity: number=0;
   currentquantity:number=0;
   totalPurchaseQuanti:number=0;
   productid!: number;

   newquantity:number=0;
   newTotalquantity:number=0;

   updatestatus : String= "approved";

//update quantity         step: 1
  approved ( product: AdPurchase){      

    this.purchaseId=product.purchase_id
    this.productid= product.product_id
    this.statusdata = product.status;
    this.purchasequantity = product.product_quantity
    this.getproductquantity();        
   }

   productdata !:AdProduct;         //---Step : 2
   getproductquantity(){
   
     this.addProductService.getById( this.productid).subscribe((data:AdProduct)=>{
       this.productdata= data;
   
       this.currentquantity= this.productdata.product_quantity;
       this.totalPurchaseQuanti=this.productdata.total_quantity;
       this.updatequantity();
     })
   }
                                      //---step :3
   updatequantity(){
    this.newquantity= ( +this.currentquantity + +this.purchasequantity) ;
    this.newTotalquantity= ( +this.totalPurchaseQuanti +  +this.purchasequantity ) ;
    
     this.addProductService.updateStock(this.productid,  this.newquantity ,this.newTotalquantity).subscribe(res=>{
    this.responce = res;
       console.log('res:' + this.responce);
       this.ngOnInit() ;
     })
    // console.log("new currentquantity : :" + this.currentquantity)
    // console.log("new purchasequantity : :" + this.purchasequantity)
  
    // console.log("update  quantity : :" + this.newquantity)
  }

// Update quantity end



   upStatus (product: AdPurchase ){
     this.stockinService.updateStatus(product.purchase_id ,this.updatestatus).subscribe()
    this.ngOnInit();
   }
    
 

 



}
