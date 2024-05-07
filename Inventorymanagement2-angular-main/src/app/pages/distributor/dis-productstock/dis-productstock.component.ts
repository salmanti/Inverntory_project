import { Component, OnInit } from '@angular/core';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { DisStock } from 'src/app/model/distributor/dis-stock.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { DisStockService } from 'src/app/service/distributor/dis-stock.service';

@Component({
  selector: 'app-dis-productstock',
  templateUrl: './dis-productstock.component.html',
  styleUrls: ['./dis-productstock.component.css']
})
export class DisProductstockComponent implements OnInit{

  constructor(    private stockService: DisStockService ,
    private productService :AdProductService){}


  disStock:DisStock []=[] ;
  disStockbyDid:DisStock []=[] ;
  productlist!:AdProduct [];
  uid:any = localStorage.getItem('uid');   // distributor id

  ngOnInit(): void {
    // this.getAll ()
    this.getAllbyDid ()
  //  console.log("user id print in dis stock = "  ,this.uid)

  }


  getAll (){
    this.stockService.getAll().subscribe((data:DisStock[])=>{

      this.disStock=data;
    })
  }

  getAllbyDid (){
    if(this.uid!==null){
      this.stockService.getAllByDid(this.uid).subscribe((data:DisStock[])=>{
        this.disStockbyDid=data
      })
    }

  }

}
