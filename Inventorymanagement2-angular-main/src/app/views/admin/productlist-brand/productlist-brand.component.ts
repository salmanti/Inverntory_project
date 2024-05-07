import { Component, OnInit } from '@angular/core';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { BrandService } from 'src/app/service/admin/brand.service';

@Component({
  selector: 'app-productlist-brand',
  templateUrl: './productlist-brand.component.html',
  styleUrls: ['./productlist-brand.component.css']
})
export class ProductlistBrandComponent implements OnInit{


  brnads !: AdBrand[];
  products: AdProduct[] = [];   //Inishilized korar jonno [] use hoache
  products2!: AdProduct[] ;
  brname: String="";

  tableshow:boolean=false;


  constructor(  private brandService: BrandService ,private productService: AdProductService){}
  ngOnInit(): void {
    this.getallBrands();
  this.getallProducts();

    


  }
  getallBrands(){
    this.brandService.getAll().subscribe((data:AdBrand[])=>{
      this.brnads= data;
    });
  }

  getallProducts(){
    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .products=data;
      
    })


  }

  viewproducts(brand: AdBrand){

    this.brname=brand.name;
    console.log(this.brname);
   
    this.viewproducts2()
    this.tableshow=true;
  }

allproducts (){

  this.tableshow=false;
}

  
  viewproducts2(){

     this.productService.getByBrand(this.brname).subscribe((data:AdProduct[])=>{
      this.products2=data;

     })
    
  }


}
