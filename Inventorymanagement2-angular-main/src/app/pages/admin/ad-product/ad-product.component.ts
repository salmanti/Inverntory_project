import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/service/admin/brand.service';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdCategories } from 'src/app/model/admin/ad-categories.model';
import { CategoryService } from 'src/app/service/admin/category.service';


@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.css']
})
export class AdProductComponent implements OnInit {
  form!: FormGroup;
  brandlist !: AdBrand[];
  categorylist ! :AdCategories[];


  constructor(
    public postService: AdProductService,
    private router: Router,
    private brandService: BrandService,
    private catService  : CategoryService
  ) { }
  
  ngOnInit(): void {

    this.form = new FormGroup({
     
      product_code: new FormControl('', [Validators.required]),
      product_name: new FormControl('', Validators.required),
      product_unit: new FormControl('', Validators.required),
      product_brand: new FormControl('', Validators.required),
      product_category: new FormControl('', Validators.required),
      product_quantity: new FormControl(0, Validators.required),
      total_quantity: new FormControl(0, Validators.required),
      purchase_rate: new FormControl(0,Validators.required),
      wirehouse_rate: new FormControl(0, Validators.required),
      distributor_rate: new FormControl(0, Validators.required),
      retail_rate: new FormControl(0, Validators.required),
      mrp: new FormControl(0, Validators.required)
    });



this.brandshow();
this.categoryshow();



  }
  get f(){
    return this.form.controls;
  }

  submit(){
    // console.log(this.form.value);
    this.postService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('ad-home/product-list');
    })
  }

  brandshow(){

    this.brandService.getAll().subscribe((data:AdBrand[])=>{
      this.brandlist= data;
    });
  }

  categoryshow(){

    this.catService.getAll().subscribe((data:AdCategories[])=>{
      this.categorylist= data;
    });
  }



}
