import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdDistributorService } from 'src/app/service/admin/ad-distributor.service';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';

@Component({
  selector: 'app-ad-saleinvoice',
  templateUrl: './ad-saleinvoice.component.html',
  styleUrls: ['./ad-saleinvoice.component.css']
})
export class AdSaleinvoiceComponent implements OnInit{
  saledetailslist: AdSaledetails[]=[];

  saledetailslist2!: AdSaledetails[];

  saledata!:AdSale;
  distributordata!: AdDistributor;

  constructor( private route: ActivatedRoute,
              private saleDetailsService: AdSalesService,
              private distributorService: AdDistributorService
    ){}
  ngOnInit(): void {

     this.salelistByid ()
    this.allsaledetails()
    
    this.salependig ()
  
    
  }
  statusdata !: String;
  approveview:boolean=false;

  id!: number;
  distrubutorid?:any;
 

  print(){  
    window.print()
  }
view :String ="SalePending"



allsaledetails(){
  this.saleDetailsService.getAll().subscribe((data:AdSaledetails[])=>{
    this.saledetailslist2=data;
  })
}

  salelistByid () {
    this.id = this.route.snapshot.params['postId'];

    this.saleDetailsService.getAllbyId(this.id).subscribe((data:AdSaledetails[])=>{
      this.saledetailslist=data;

      this.saledetailslist.map((a:any)=>{
        // console.log(a)
        this.grandTotalsss += a.total;


        
      })
    })

    
    // console.log('total--------', this.grandTotalsss)

  }


  grandTotalsss:number=0;
 
total(){

  
}

  getTotalPrice() : number{
    let grandTotal = 0;
    this.saledetailslist.map((a:any)=>{
      console.log(a)
      this.grandTotalsss += a.total;
    })
    return grandTotal;
    
  }


  date! :any ;
  salependig (){
    this.saleDetailsService.getById( this.id).subscribe((res:AdSale)=>{
      this.saledata=res
      

      if( this.view=== this.saledata.status){
        this.approveview=false;
     } else{ this.approveview=false}
     this.date=this.saledata.date;
     this.distrubutorid= this.saledata.distributor_id;
     this.distributord()
    })
  }

  disname!:any
  disaddress!:any
  disphone!:any
  disemail!:any
    distributord(){
   this.distributorService.getById(this.distrubutorid).subscribe((data:AdDistributor)=>{
    this.distributordata=data;
    this.disname= this.distributordata.name
    this.disaddress= this.distributordata.address
    this.disphone= this.distributordata.mobile
   
   })
  
    }

  approved(){
   const updatestatus : string= "SaleApproved";
   this.upStatus (updatestatus)

  }
  cancelled(){
    const updatestatus : string= "SaleCancelled";
this.upStatus (updatestatus)
  }

  updatestatus : String= "SaleApproved";
  
  upStatus (updatedata:string){
    this.saleDetailsService.updateStatus( this.id ,updatedata).subscribe((data:any)=>{
      this.ngOnInit();
    })
 
  }
   

}
