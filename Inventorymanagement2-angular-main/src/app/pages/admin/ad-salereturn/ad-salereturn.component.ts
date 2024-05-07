import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';

@Component({
  selector: 'app-ad-salereturn',
  templateUrl: './ad-salereturn.component.html',
  styleUrls: ['./ad-salereturn.component.css']
})
export class AdSalereturnComponent implements OnInit{


  salesList!: AdSale[];

  constructor( private route: ActivatedRoute,
    private saleDetailsService: AdSalesService,){}

  ngOnInit(): void {
    this.allsales()
   
  }


  allsales(){
    const status:String= "AdSaleReturnPending"
    this.saleDetailsService.getAllSalesByStatus(status).subscribe((data: AdSale[])=>{
      this.salesList=data
    })
    
  }

}
