import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdCategories } from 'src/app/model/admin/ad-categories.model';
import { CategoryService } from 'src/app/service/admin/category.service';

@Component({
  selector: 'app-ad-category',
  templateUrl: './ad-category.component.html',
  styleUrls: ['./ad-category.component.css']
})
export class AdCategoryComponent  implements OnInit {



  
  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 
  
  addForm!:FormGroup;
  categories !: AdCategories[];
  
  constructor(private formBuilder: FormBuilder,  private barService: CategoryService,  private router: Router) { }

  ngOnInit(): void {
    this.addForm= this.formBuilder.group({
      id:[],
      code:[''],
      name:[''],
      description:[''],
     
    })
    this.getall();



   
  }

  getall(){
    this.barService.getAll().subscribe((data:AdCategories[])=>{
      this.categories= data;
    });
  }

  add(){
    this.barService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
      this.createform =false
     })
  };

  delete(product: AdCategories): void {  
    this.barService.delete(product.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  editEmp(product: AdCategories): void {

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

  update(){
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
