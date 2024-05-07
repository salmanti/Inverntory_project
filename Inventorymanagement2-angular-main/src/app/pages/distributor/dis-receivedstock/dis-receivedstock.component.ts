import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';

@Component({
  selector: 'app-dis-receivedstock',
  templateUrl: './dis-receivedstock.component.html',
  styleUrls: ['./dis-receivedstock.component.css']
})
export class DisReceivedstockComponent implements OnInit{
  
  salesList!: AdSale[];

  uid:any = localStorage.getItem('uid');   // distributor id

  constructor( private route: ActivatedRoute,
    private saleDetailsService: AdSalesService,){}
  
  ngOnInit(): void {
    this.allsales()
    
  }

  status:string= "SaleApproved"

  allsales(){
    this.saleDetailsService.getByStatusDid(this.status , this.uid).subscribe((data: AdSale[])=>{
      this.salesList=data
    })
    
  }

}
