import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdWarehouse } from 'src/app/model/admin/ad-warehouse.model';
import { AdWarehouseService } from 'src/app/service/admin/ad-warehouse.service';

@Component({
  selector: 'app-ad-warehouse',
  templateUrl: './ad-warehouse.component.html',
  styleUrls: ['./ad-warehouse.component.css']
})
export class AdWarehouseComponent implements OnInit{

  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 

  addForm!:FormGroup;
  products !: AdWarehouse[];

  constructor(private formBuilder: FormBuilder,  private disService: AdWarehouseService,  private router: Router) { }

  ngOnInit(): void {
    
    this.addForm= this.formBuilder.group({
      id:[],
      code:[''],
      name:[''],
      mobile:[''],
      address:['']
     
      
    })

    this.getall();
    // this.disService.getAll().subscribe((data:AdWarehouse[])=>{
    //   this.products= data;
    // });
    
    
  }
  get f(){
    return this.addForm.controls;
  }

  getall(){
    this.disService.getAll().subscribe((data:AdWarehouse[])=>{
      console.log("get All called..")
      this.products= data;
    });
  }

  addWarehouse(){ 
    this.disService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
      this.createform =false 
     })
  }
  delProduct(product: AdWarehouse): void {  
    this.disService.delete(product.id)  
      .subscribe(data =>{  
        this.ngOnInit();
        
      })  
  }

  editEmp(product: AdWarehouse): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.disService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      this.btnvisibility = false;  
      this.Productformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  


  } 

  updateWarehouse(){

    this.disService.update(this.addForm.value).subscribe(data =>{  
      console.log("------------------")
      this.createform =false 
      this.btnvisibility = true;  
      this.Productformlabel = 'Add Employee';  
      this.empformbtn = 'Save';  
    } )
  }




  show(){ this.createform =true }
  hide(){ this.createform =false }
}
