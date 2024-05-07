import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DisCustomer } from 'src/app/model/distributor/dis-customer.model';
import { DisCustomerService } from 'src/app/service/distributor/dis-customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dis-customer',
  templateUrl: './dis-customer.component.html',
  styleUrls: ['./dis-customer.component.css']
})
export class DisCustomerComponent implements OnInit{



  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 

  addForm!:FormGroup;
  products !: DisCustomer[];

  uid:any = localStorage.getItem('uid');   // distributor id

  constructor(
    private customerService : DisCustomerService,
    private formBuilder: FormBuilder
  ){}
  ngOnInit(): void {

    this.addForm= this.formBuilder.group({
      id:[],
      code:[''],
      name:[''],
      mobile:[''],
      email:[''],
      address:[''],
      zone:[''],
      gender:[''],
      distributor_id:this.uid,


     
      
    })

    this.customerService.getAll().subscribe((data:DisCustomer[])=>{
      this.products= data;
    });
    
  }
 





  getall(){
    this.customerService.getAll().subscribe((data:DisCustomer[])=>{
      this.products= data;
    });
  }

  addCustomer(){
    this.customerService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
     })
   

  }
  notification!: any ;

  delProduct(product: DisCustomer): void {  
    this.customerService.delete(product.id).subscribe((res:any) => {  
       this.notification=res;
      //  console.log("herfggrf")
      //  console.log("herfggrf",this.notification)

      //  alert(this.notification.msg) 

       this.ngOnInit();
      })
  }


alertConfigaration( product: DisCustomer){
Swal.fire({
  title:'Are you sure !',
  text:'You want to Delete this item',
  icon:'warning',
  showCancelButton:true,
  confirmButtonText: 'Yes',
  cancelButtonText:'No',
}).then((result)=>{
  if (result.value){
    this.delProduct(product);
    Swal.fire(
      'Successfully Deleted!',
      
    )
  }else if( result.dismiss=== Swal.DismissReason.cancel){
    // Swal.fire('Cancelled', 'Product still in our database.','error');
  }
})

}





  editEmp(product: DisCustomer): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.customerService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      this.btnvisibility = false;  
      this.Productformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  


  }  

  updateCustomer(){
    this.customerService.update(this.addForm.value).subscribe(data => {  
      this.btnvisibility = true;  
      this.createform = false;
      this.Productformlabel = 'Add Employee';  
      this.empformbtn = 'Save';   
      this.ngOnInit(); 
    } )}
     

  




  show(){ this.createform=true }
  hide(){ this.createform=false }


}
