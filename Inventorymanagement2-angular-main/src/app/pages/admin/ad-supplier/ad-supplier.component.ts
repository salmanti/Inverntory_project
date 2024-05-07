import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdSupplier } from 'src/app/model/admin/ad-supplier.model';
import { AdSupplierService } from 'src/app/service/admin/ad-supplier.service';

@Component({
  selector: 'app-ad-supplier',
  templateUrl: './ad-supplier.component.html',
  styleUrls: ['./ad-supplier.component.css']
})
export class AdSupplierComponent implements OnInit {

  createform: boolean = false;
  btnvisibility: boolean = true;
Productformlabel: string = 'Add Product';  
  empformbtn: string = 'Save'; 

  addForm!:FormGroup;
  products !: AdSupplier[];
  constructor(private formBuilder: FormBuilder,  private suppService: AdSupplierService) { }

  ngOnInit() {
    this.addForm= this.formBuilder.group({
      id:[],
      supplier_name:[''],
      zip_code:[''],
      phone:[''],
      email:[''],
      address:[''],
     bank_account:['']
    })

    this.suppService.getAll().subscribe((data:AdSupplier[])=>{
      this.products= data;
    }); 
  }

  getall(){
    this.suppService.getAll().subscribe((data:AdSupplier[])=>{
      this.products= data;
    });
  }

  addProduct() {  
    this.suppService.create(this.addForm.value).subscribe(data=>{
      this.createform= false;
     this.ngOnInit();
    })
  
  }
  delProduct(product: AdSupplier): void {  
    this.suppService.delete(product.id)  
      .subscribe(data => {  
        this.ngOnInit();
        
      })  
  }
  
  
  editEmp(product: AdSupplier): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.suppService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
        this.createform= true;
      this.btnvisibility = false;  
      this.Productformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  


  }  

  updatePro() {  
    this.suppService.update(this.addForm.value).subscribe(data => {  
    this.createform= false;
    this.btnvisibility = true;  
    this.Productformlabel = 'Add Employee';  
    this.empformbtn = 'Save';   
    this.ngOnInit(); 
  } )}
   


  show(){ this.createform=true }
  hide(){ this.createform=false }

}
