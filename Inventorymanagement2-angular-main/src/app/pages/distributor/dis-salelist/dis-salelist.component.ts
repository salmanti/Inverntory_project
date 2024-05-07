import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';

@Component({
  selector: 'app-dis-salelist',
  templateUrl: './dis-salelist.component.html',
  styleUrls: ['./dis-salelist.component.css']
})
export class DisSalelistComponent  implements OnInit{

  salesList!: AdSale[];
  saledetailslist2!: AdSaledetails[];
  DistributorSalelist!: AdSale[];
  createform: boolean = false;

  uid:any = localStorage.getItem('uid');   // distributor id

constructor(
  private saleDetailsService: AdSalesService,
  private router: Router
){}

  ngOnInit(): void {

    this. saleapproved();
   
   
  }

  saleapproved(){
    const status3:string='DistributorSale'
    this.salesbyStatus(status3);
    this.createform=false
  }
  salesbyStatus(statusss: string){
    this.saleDetailsService.getByStatusDid(statusss , this.uid).subscribe((data: AdSale[])=>{
      this.DistributorSalelist=data
    })
  }

  delete(product?: number): void {  
    this.saleDetailsService.delete(product).subscribe(data =>{  
      //  this.salepending();
        
      })  
  }


}
