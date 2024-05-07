import { Component,OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdSupplierService } from 'src/app/service/admin/ad-supplier.service';
import { AdSupplier } from 'src/app/model/admin/ad-supplier.model';
import { BrandService } from 'src/app/service/admin/brand.service';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';

@Component({
  selector: 'app-ad-stocin',
  templateUrl: './ad-stocin.component.html',
  styleUrls: ['./ad-stocin.component.css']
})
export class AdStocinComponent implements OnInit {
  id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];

  supplist: AdSupplier[] = [];
  supplierdata!:AdSupplier;

  brnads !: AdBrand[];
  
  
  productslist3!: AdProduct[] ;   // products data

  brname: String="";

  price: number=0;
  quantity!:number ;
  total!:number;

  addForm!:FormGroup;
  addForm2!:AdProduct;
  post2!: AdProduct;
  
  createform: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    public productService: AdProductService,
    public supplierService : AdSupplierService,
    private route: ActivatedRoute,
    private brandService: BrandService,
    private stockinService: AdStockinService,
    
    private router: Router
   ) { }
  ngOnInit(): void {
    this.productlist()
    this.supplierlist()
    this.getallBrands()


    this.addForm=this.formBuilder.group({
      id:[],
      brand_name:[''],
      product_id:[''],
      product_name:[''],
      product_unit:[''],
      product_price:[''],
      product_quantity:[''],
      supplier_name:[''],
      supplier_id:[],
      supplier_phone:[''],
      supplier_email:[''],
      supplier_address:[''],
      payment_method:[''],
      date:[''],
      amount:[''],
      status:[''],
      stock:[]

    })
   
   
    
   
  }

  status: string ='pending'
  add(){
    // this.addForm2  = {

    //   brand_name: this.addForm.value.brand_name,
    //   product_id:this.addForm.value.product_id,
    //   product_name:this.addForm.value.brand_name,
    //   product_unit:this.addForm.value.brand_name,
    //   product_price:this.addForm.value.brand_name,
    //   product_quantity:this.addForm.value.brand_name,
    //   supplier_name:this.addForm.value.brand_name,
    //   payment_method:this.addForm.value.brand_name,
    //   date:this.addForm.value.brand_name,
    //   amount:this.addForm.value.brand_name
    // }
    this.addForm.value.supplier_name=this.sname;
    this.addForm.value.supplier_email=this.semail;
    this.addForm.value.supplier_address=this.saddress;
    this.addForm.value.supplier_phone=this.sphone;
    this.addForm.value.supplier_id= this.sid;
    this.addForm.value.product_name = this.pname;
    this.addForm.value.product_unit = this.punit;
    this.addForm.value.product_price = this.purchaeprice;
    this.addForm.value.amount = this.total;
    this.addForm.value.status=this.status;

    this.stockinService.create(this.addForm.value).subscribe(data=>{
     
   
     })

     this.ngOnInit()
  };

  show(){ this.createform =true }
  hide(){ this.createform =false }

  calculateResult() {
     this.total = this.price * this.quantity;
    // console.log("total :" +  this.price + "  "+this.quantity)
    
  }


  supplierlist(){
    this.supplierService.getAll().subscribe((data:AdSupplier[])=>{
      this .supplist=data;
      // console.log(this.posts);
    })
  }

  productlist(){
    this.productService.getAll().subscribe((data:AdProduct[])=>{
      this .posts=data;
      // console.log(this.posts);
    })
  }

  getallBrands(){
    this.brandService.getAll().subscribe((data:AdBrand[])=>{
      this.brnads= data;
    });
  }

 
/// brand data find

 selectbrand :String="";


 productsfrombrand ( event: any){
  this.selectbrand = event.target.value;
  // console.log("brand name : " + this.selectbrand )
  this.productService.getByBrand(this.selectbrand).subscribe((data:AdProduct[])=>{
    this .productslist3=data;
   
    
  })

 }

 // for supplier details
 supplierAlldata!: AdSupplier;  // supplier data

selectsupplir: String ="";

sname: any = "";
sphone: any = '';
semail: any = '';
saddress: any = '';
sid!: number ;


supplierevent ( event: any){
  this.selectsupplir= event.target.value;
  this.supplierService.getSupplierByName(this.selectsupplir).subscribe((data:AdSupplier)=>{
    this.supplierAlldata=data;

this.sname= this.supplierAlldata.supplier_name;
this.sphone=this.supplierAlldata.phone;
this.sid= this.supplierAlldata.id;
this.saddress=this.supplierAlldata.address;
this.semail=this.supplierAlldata.email;

  })
  


}



  editEmp( product: AdProduct): void {

    localStorage.removeItem('proId');  
    // let proid = 0;
    localStorage.setItem('proId', product.product_id.toString());
    let proid: any = localStorage.getItem('proId'); 
    if (+proid > 0) {  
      this.productService.getById(+proid).subscribe(
        data => {this.addForm.patchValue(data);}
        )  
      
    }  

  }  

productdatamethod(product: AdProduct):void{
  // this.productService.find(product.id);
  this.productService.find(product.product_id).subscribe((data: AdProduct)=>{
    this.post2 = data;
  });
}


supplierdatamethod(product: AdSupplier):void{
  // this.productService.find(product.id);
  this.supplierService.getById(product.id).subscribe((data: AdSupplier)=>{
    this.supplierdata = data;
  });
}
selectedPost!: number ;

post4!: AdProduct;



pname: string = '';
punit: string = '';
abc3: string = '';
totalstcok!: number ;
purchaeprice!: number;
productid!:number;


abcd (event: any){ 
  this.selectedPost = event.target.value;
  // console.log("Product Added"+ this.selectedPost);

  this.productService.find(this.selectedPost).subscribe((data:AdProduct)=>{
    this .post4=data;
    this.pname = this.post4.product_name;
    this.punit = this.post4.product_unit;
    this.abc3 = this.post4.product_brand;
    this.totalstcok= this.post4.product_quantity;
    this.purchaeprice= this.post4.purchase_rate;
    this.price= this.post4.purchase_rate;
    this.productid=this.post4.product_id;
     console.log(" product name: "+   this.pname);
    this.calculateResult() 
  })


}





}
