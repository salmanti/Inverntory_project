import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';

@Component({
  selector: 'app-ad-product-stock',
  templateUrl: './ad-product-stock.component.html',
  styleUrls: ['./ad-product-stock.component.css']
})
export class AdProductStockComponent {

  id!: number;
  post!: AdProduct;
  products: AdProduct[] = [];
  
  constructor(
    public productService: AdProductService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

   ngOnInit(): void {
    // this.id = this.route.snapshot.params['postId'];
    // this.productService.find(this.id).subscribe((data: AdProduct)=>{
    //   this.post = data;
    // });

    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .products=data;
      // console.log(this.posts);
    })

  }
  deletePost(id:number){
    this.productService.delete(id).subscribe(res => {
         this.products = this.products.filter(item => item.product_id !== id);
         console.log('Post deleted successfully!');
    })
    // this.ngOnInit();
  }





}
