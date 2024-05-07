import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdDistributorService } from 'src/app/service/admin/ad-distributor.service';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';
import { BrandService } from 'src/app/service/admin/brand.service';

@Component({
  selector: 'app-ad-wastagentry',
  templateUrl: './ad-wastagentry.component.html',
  styleUrls: ['./ad-wastagentry.component.css']
})
export class AdWastagentryComponent implements OnInit{

  constructor( private route: ActivatedRoute,
    private saleService: AdSalesService,
    private productService: AdProductService,
    private brandService: BrandService,
    private router: Router
){}


id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];
  productList: AdPurchase[]=[];  //  array of purchase
  product!: AdPurchase;
  brnads !: AdBrand[];
  productslist3!: AdProduct[] ;   // products data
  saledetailsList : AdSaledetails []=[]  // sale details array
   saledetaisd!: AdSaledetails;
   salelist: AdSale[]= [];
   saledatas!: AdSale;

   

  ngOnInit(): void {
    this.nextVal ()
    this.getallBrands()
    this.productlist()
    this.getallBrands()
  
  }

  add3(){
    this.addsalesdata();
  this. addsale()

  }


  saleids!:any;
  date!:string;
 
  statusdata : string= "Wastage"

  addsalesdata(){         //sale data
    this.saledatas ={
      date: this.date,
      grand_total : this.grandTotalsss,
       status:this.statusdata,

      //  distributor_id: 0 ,
      // warehouse_id: ,
      // customer_id :,
      // sale_details_id :
    }
    this.saleService.saveSale(this.saledatas).subscribe(res=>{
      
    })
  }


  addsale(){                 //sale detais
    this.saleService.saveAll(this.saledetailsList).subscribe(res=>{
     
    const url = '/ad-home/'+this.nextValue+'/saleinvoice'

    this.router.navigateByUrl( url);

     })

  }

  addSaleDetails (){
    this.saledetaisd = {

 // private long sale_id;
    
 product_id: this.productid, 
 unit_price: this.purchaeprice,
 
 quantity: this.quantity,
 total:this.total,
 sale_id : this.nextValue,
 product_name: this.pname,
 product_brand: this.pbrand,
//  distributor_id: this.dillerid



    }
    console.log ('sales details : ' , this.saledetaisd)
    this.saledetailsList.push(this.saledetaisd);

    this.quantity=0;
    this.pname="";
    this.total=0;
    this.productid=0;
    this.purchaeprice=0;
    this.totalstcok=0;
    
    // console.log( 'date:' , this.date);

  }
 

  nextValue!: number;
  nextVal ( ){
    this.productService.findNextValue().subscribe((data:any)=>{
     this.nextValue= data
    //  console.log("This is the next Value : " + this.nextValue )

    });
    
  }

  grandTotalsss:number=0;

  getTotalPrice() : number{
    let grandTotal = 0;
    this.saledetailsList.map((a:any)=>{
      this.grandTotalsss += a.total;
    })
    return grandTotal;
  }

  removeItem(item: any){
    const indexvalue:number= parseInt(item) ;
 
   // console.log("index of array = " +indexvalue)
 this.saledetailsList.splice(indexvalue,1);
    }

    productlist(){

      this.productService.getAll().subscribe((data:AdProduct[])=>{
        this .posts=data;
        // console.log(this.posts);
      })
  
    }

    selectbrand :String="";

    productsfrombrand ( event: any){          // select product from brand
     this.selectbrand = event.target.value;
     // console.log("brand name : " + this.selectbrand )
     this.productService.getByBrand(this.selectbrand).subscribe((data:AdProduct[])=>{
       this .productslist3=data;
      
       
     })
   
    }


    
  getallBrands(){
    this.brandService.getAll().subscribe((data:AdBrand[])=>{
      this.brnads= data;
    });
  }


    singelproduct!: AdProduct;

    productdatamethod(product: AdProduct):void{
      // this.productService.find(product.id);
      this.productService.find(product.product_id).subscribe((data: AdProduct)=>{
        this.singelproduct = data;
      });
    }
 


    post4!: AdProduct;
    selectedPost!: number ;
pname: string = '';
punit: string = '';
pbrand: string = '';
totalstcok!: number ;
purchaeprice!: number;
productid!:number;
price: number=1;


    selectProduct (event: any){ 
      this.selectedPost = event.target.value;
      console.log("Product Added"+ this.selectedPost);
    
      this.productService.find(this.selectedPost).subscribe((data:AdProduct)=>{
        this .post4=data;
        this.pname = this.post4.product_name;
        this.punit = this.post4.product_unit;
        this.pbrand = this.post4.product_brand;
        this.totalstcok= this.post4.product_quantity;
        this.purchaeprice= this.post4.purchase_rate;
        this.price= this.post4.purchase_rate;
        this.productid=this.post4.product_id;
        // console.log(this.posts);
        this.calculateResult() 
      })
    
    
    }
    total!:number;
    quantity!:number ;

    calculateResult() {
      this.total = this.price * this.quantity;
     // console.log("total :" +  this.price + "  "+this.quantity)
     
   }

}
