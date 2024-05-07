import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { DisCustomer } from 'src/app/model/distributor/dis-customer.model';
import { DisStock } from 'src/app/model/distributor/dis-stock.model';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';
import { BrandService } from 'src/app/service/admin/brand.service';
import { DisCustomerService } from 'src/app/service/distributor/dis-customer.service';
import { DisStockService } from 'src/app/service/distributor/dis-stock.service';

@Component({
  selector: 'app-dis-sale',
  templateUrl: './dis-sale.component.html',
  styleUrls: ['./dis-sale.component.css']
})
export class DisSaleComponent implements OnInit{

constructor(
  private distributorStock: DisStockService,
  private productService: AdProductService,
  private saleService: AdSalesService,
  private route: ActivatedRoute,
  private brandService: BrandService,
  private disCustomerService: DisCustomerService,
  private router: Router
){}

productlist!: DisStock[]
saledetailsList : AdSaledetails []=[]  // sale details array
saledetaisd!: AdSaledetails;
salelist: AdSale[]= [];
saledatas!: AdSale;
brnads !: AdBrand[];   // brand list

customerlist!:DisCustomer[]  // customer list

date!:string;
quantity!:number ;
uid:any = localStorage.getItem('uid');   // distributor id


  ngOnInit(): void {
    this.nextVal ( )
    this.  getallBrands()
    this.getallCustomer();
    
  }

  getallBrands() {
    this.brandService.getAll().subscribe((data: AdBrand[]) => {
      this.brnads = data;
    });
  }
   getallCustomer(){
    this.disCustomerService.getAll().subscribe((data: DisCustomer[])=>{
      this.customerlist=data
    })
   }

  selectbrand: string = "";


  productsfrombrand(event: any) {
    this.selectbrand = event.target.value;
    
    
    this.distributorStock.getByBrandDid(this.selectbrand, this.uid).subscribe((data:DisStock[])=>{
      this.productlist= data;
    })

  }



  allproducts(){
    this.distributorStock.getAll().subscribe((data:DisStock[])=>{
      this.productlist=data;
    })
  }

  statusdata: string = "DistributorSale"

  addsalesdata() {                    //Sale Data
    this.saledatas = {
      date: this.date,
      grand_total: this.grandTotalsss,
      distributor_id: this.uid,      
      status: this.statusdata,
      customer_id: this.customerid
      // warehouse_id: ,
      // customer_id :,
      // sale_details_id :
    }

    this.saleService.saveSale(this.saledatas).subscribe(res => {
      this.add2();            //sale Details data
    })
  }


  add2() {                                                               // Sale_details data
    this.saleService.saveAll(this.saledetailsList).subscribe(res => {

      const url = '/dis-home/' + this.nextValue + '/saleinvoice'
      console.log('URL', url)

      this.router.navigateByUrl(url);

    })
  }


  AddtoCard() {                    // Add sale_Details to array 
    this.saledetaisd = {

      // private long sale_id;

      
      product_id: this.productid,
      unit_price: 0,

      quantity:  this.quantity,
      total:this.total,
      sale_id: this.nextValue,
      product_name:  this.pname,
      product_brand:this.pbrand,
      distributor_id:this.uid,
      product_category: this.product_cat,
      retail_rate: this.dis_rate,
      mrp: this.mrp

    }
    console.log('sales details : ', this.saledetaisd)
    this.saledetailsList.push(this.saledetaisd);          // push into sales details array 

    this.quantity=0;
    this.pname="";
    this.productid=0;
    this.purchaeprice=0;
    // this.totalstcok=0;
    this.currentstock=0;
    this.total=0,
    this.product_cat=''
    this.dis_rate=0
    this.mrp=0
  
    this.quantity=0;     // for previous ng model quantiy = 0   
    this.getTotalPrice()
    // console.log('date:', this.date);

    this.selectbrand = "";          // to add same product again

  }

  total!: number;

  calculateResult() {
    this.total = this.dis_rate * this.quantity;
    // console.log("total :" +  this.price + "  "+this.quantity)

  }

  
  grandTotalsss: number = 0;
  totalSale() { }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.grandTotalsss=0;
    this.saledetailsList.map((a: any) => {             // mark
      this.grandTotalsss += a.total;
    })
    return grandTotal;
  }


  post4!: DisStock;

  pname!: string ;
  abc2: string = '';
  pbrand!: string;
  currentstock!: number;
  purchaeprice!: number;
  productid!: number;
  dis_rate!: number;     // use for admin sale and dis purchaase and return
  mrp!: number;
  product_cat: string='';


  productDatafromProduct(event: any) {
    this.productid = event.target.value;
    console.log("Product Added" + this.productid);

    this.distributorStock.getByPidDid(this.productid, this.uid).subscribe((data: DisStock) => {
       this.post4 = data;
      this.pname = this.post4.product_name;
      this.product_cat = this.post4.product_category;
       this.pbrand = this.post4.product_brand;
       this.currentstock = this.post4.current_quantity;
      this.mrp = this.post4.mrp;
       this.dis_rate = this.post4.retail_rate;
       this.productid = this.post4.product_id;
      // // console.log(this.posts);
      // this.calculateResult()
    })


  }

  customerid!: number;
  customerevent(event:any){
    this.customerid = event.target.value;
    console.log('customer id', this.customerid)


  }

  removeItem(item: any) {
    const indexvalue: number = parseInt(item);

    // console.log("index of array = " +indexvalue)
    this.saledetailsList.splice(indexvalue, 1);

    this.  getTotalPrice()

  }


  nextValue!: number;
  nextVal ( ){
    this.productService.findNextValue().subscribe((data:any)=>{
     this.nextValue= data
    //  console.log("This is the next Value : " + this.nextValue )

    });
    
  }

}
