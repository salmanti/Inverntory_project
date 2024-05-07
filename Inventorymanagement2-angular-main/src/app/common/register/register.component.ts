import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';
import { AdLoginregService } from 'src/app/service/admin/ad-loginreg.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 
  
  addForm!:FormGroup;
  products !: AdLoginRegistration[];

  constructor(private formBuilder: FormBuilder,  private logregService: AdLoginregService,  private router: Router) { }
  

  ngOnInit(): void {
   

    this.addForm= this.formBuilder.group({
      id:[],
      phone:[''],
      name:[''],
      email:[''],
      password2:['']
     
    })

   
  }

  
  getall(){
    this.logregService.getAll().subscribe((data:AdLoginRegistration[])=>{
      this.products= data;
    });
  }

  addUser(){
    this.logregService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
      this.createform =false 
     })
  };

  delProduct(product: AdLoginRegistration): void {  
    this.logregService.delete(product.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  editEmp(product: AdLoginRegistration): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.logregService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      this.btnvisibility = false;  
      this.Productformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  
  } 

  updateWarehouse(){
    this.logregService.update(this.addForm.value).subscribe(data =>{  
     
      this.createform =false 
      this.btnvisibility = true;  
      this.Productformlabel = 'Add Employee';  
      this.empformbtn = 'Save';  
    } )

  };

  show(){ this.createform =true }
  hide(){ this.createform =false }


}
