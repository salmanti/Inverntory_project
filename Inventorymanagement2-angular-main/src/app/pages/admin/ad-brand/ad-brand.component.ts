import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { BrandService } from 'src/app/service/admin/brand.service';

@Component({
  selector: 'app-ad-brand',
  templateUrl: './ad-brand.component.html',
  styleUrls: ['./ad-brand.component.css']
})
export class AdBrandComponent  implements OnInit {


  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 
  
  addForm!:FormGroup;
  products !: AdBrand[];
  constructor(private formBuilder: FormBuilder,  private barService: BrandService,  private router: Router) { }
  
  ngOnInit(): void {
   
    this.addForm= this.formBuilder.group({
      id:[],
      code:[''],
      name:[''],
      description:[''],
      category:[''],
      subcategory:['']
    })
    this.getall();
  }

  
  getall(){
    this.barService.getAll().subscribe((data:AdBrand[])=>{
      this.products= data;
    });
  }

  addWarehouse(){
    this.barService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
      this.createform =false 
     })
  };

  delProduct(product: AdBrand): void {  
    this.barService.delete(product.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  editEmp(product: AdBrand): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.barService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      this.btnvisibility = false;  
      this.Productformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  


  } 

  updateWarehouse(){
    this.barService.update(this.addForm.value).subscribe(data =>{  
     
      this.createform =false 
      this.btnvisibility = true;  
      this.Productformlabel = 'Add Employee';  
      this.empformbtn = 'Save';  
    } )

  };

  show(){ this.createform =true }
  hide(){ this.createform =false }

}
