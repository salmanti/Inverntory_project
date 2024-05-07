import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { AdDistributorService } from 'src/app/service/admin/ad-distributor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ad-distributor',
  templateUrl: './ad-distributor.component.html',
  styleUrls: ['./ad-distributor.component.css']
})
export class AdDistributorComponent implements OnInit{

  
  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 

  addForm!:FormGroup;
  products !: AdDistributor[];
  usertype:string= 'distributor';

  constructor(private formBuilder: FormBuilder,  private disService: AdDistributorService) { }

  ngOnInit(): void {
    this.addForm= this.formBuilder.group({
      id:[],
      code:[''],
      name:[''],
      mobile:[''],
      address:[''],
      zone:[''],
      password2:[''],
      email:[''],
      username:[''],
      usertype:['distributor'],
      photo:['']
      
    })

    this.disService.getAll().subscribe((data:AdDistributor[])=>{
      this.products= data;
    });
    
  }
  getall(){
    this.disService.getAll().subscribe((data:AdDistributor[])=>{
      this.products= data;
    });
  }

  addDistributor(){
    this.disService.create(this.addForm.value).subscribe(data=>{
      this.ngOnInit();
     })
   

  }
  notification!: any ;

  delProduct(product: AdDistributor): void {  
    this.disService.delete(product.id).subscribe((res:any) => {  
       this.notification=res;
      //  console.log("herfggrf")
      //  console.log("herfggrf",this.notification)

      //  alert(this.notification.msg) 

       this.ngOnInit();
      })
  }


alertConfigaration( product: AdDistributor){
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





  editEmp(product: AdDistributor): void {

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

  updateDistributor(){
    this.disService.update(this.addForm.value).subscribe(data => {  
      this.btnvisibility = true;  
      this.createform = false;
      this.Productformlabel = 'Add Employee';  
      this.empformbtn = 'Save';   
      this.ngOnInit(); 
    } )}
     

  




  show(){ this.createform=true }
  hide(){ this.createform=false }

}
