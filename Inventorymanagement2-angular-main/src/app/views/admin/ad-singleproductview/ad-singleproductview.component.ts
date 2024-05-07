import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';

@Component({
  selector: 'app-ad-singleproductview',
  templateUrl: './ad-singleproductview.component.html',
  styleUrls: ['./ad-singleproductview.component.css']
})
export class AdSingleproductviewComponent implements OnInit{

product!: AdProduct;
id!: number;

  constructor(
    public productService: AdProductService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }
  ngOnInit(): void {
   this.productdata ()
  
  }
  productdata () {
    this.id = this.route.snapshot.params['postId'];

    this.productService.getById(this.id).subscribe((data:AdProduct)=>{
      this.product=data
    })
  }


}
