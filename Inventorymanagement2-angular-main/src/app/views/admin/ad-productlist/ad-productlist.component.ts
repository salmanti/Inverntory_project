import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdCategories } from 'src/app/model/admin/ad-categories.model';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { BrandService } from 'src/app/service/admin/brand.service';
import { CategoryService } from 'src/app/service/admin/category.service';

@Component({
  selector: 'app-ad-productlist',
  templateUrl: './ad-productlist.component.html',
  styleUrls: ['./ad-productlist.component.css']
})
export class AdProductlistComponent implements OnInit{
  
  id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];
  categories! : AdCategories[];
  brands!: AdBrand[];
  createform: boolean = false;
 addForm!:FormGroup;

  constructor(
    public productService: AdProductService,
    public categoryService: CategoryService,
    private route: ActivatedRoute,
    private brandService : BrandService,
    
    private router: Router
   ) { }
  ngOnInit(): void {
    // this.id = this.route.snapshot.params['postId'];
    // this.productService.find(this.id).subscribe((data: AdProduct)=>{
    //   this.post = data;
    // });


    this.addForm = new FormGroup({
      product_id:new FormControl(''),
      product_code: new FormControl('', [Validators.required]),
      product_name: new FormControl('', Validators.required),
      product_unit: new FormControl('', Validators.required),
      product_brand: new FormControl('', Validators.required),
      product_quantity: new FormControl(0, Validators.required),
      total_quantity: new FormControl(0, Validators.required),
      purchase_rate: new FormControl(0,Validators.required),
      wirehouse_rate: new FormControl(0, Validators.required),
      distributor_rate: new FormControl(0, Validators.required),
      retail_rate: new FormControl(0, Validators.required),
      mrp: new FormControl(0, Validators.required),
      product_category: new FormControl('',Validators.required)
    });


    this.getAll()
    this. categorylist()
    this.brandlist()

  }

  getAll(){

    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .posts=data;
      // console.log(this.posts);
    })

  }
  categorylist(){
    this.categoryService.getAll().subscribe((data:AdCategories[])=>{
      this.categories = data
    })
  }

  brandlist(){
    this.brandService.getAll().subscribe((data:AdBrand[])=>{
      this.brands=data;
    })

  }
  deletePost(id:number){
    this.productService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.product_id !== id);
         console.log('Post deleted successfully!');
    })
    // this.ngOnInit();
  }


  editEmp(product: AdProduct): void {
    // console.log("console : "+product.product_id)

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.product_id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.productService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
     
 
    }  
this.createform=true;

  } 

  update(){
    this.productService.update(this.addForm.value).subscribe(data =>{  
     
      this.ngOnInit();
      this.createform =false 
       
     
    } )

  };

  show(){ this.createform =true }
  hide(){ this.createform =false }

}
