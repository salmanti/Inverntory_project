import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { DisCustomer } from 'src/app/model/distributor/dis-customer.model';
import { DisStock } from 'src/app/model/distributor/dis-stock.model';
import { AdDistributorService } from 'src/app/service/admin/ad-distributor.service';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';
import { DisCustomerService } from 'src/app/service/distributor/dis-customer.service';
import { DisStockService } from 'src/app/service/distributor/dis-stock.service';
import { DisCustomerComponent } from '../dis-customer/dis-customer.component';

@Component({
  selector: 'app-dis-stockininvoice',
  templateUrl: './dis-stockininvoice.component.html',
  styleUrls: ['./dis-stockininvoice.component.css']
})
export class DisStockininvoiceComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private saleDetailsService: AdSalesService,
    private distributorService: AdDistributorService,
    private producService: AdProductService,
    private stockService: DisStockService,
    private customerService: DisCustomerService
  ) { }

  ngOnInit(): void {

    this.salelistByid()
    // this.allsaledetails()
    this.salependig()
    // this.distributord()

    this.salesdata ()
  }

  statusdata !: String;
  approveview: boolean = false;

  saledetailslist: AdSaledetails[] = [];
  saledetailslist2!: AdSaledetails[];
  productlist!: AdProduct[]
  distributordata!: AdDistributor;
  saledata!: AdSale;
  adproductlist!: AdProduct[]
  getproduct!: AdProduct   // single product get from admin product list
  distrubutorid?: any;
  distributorStock!: DisStock

  customerdata!: DisCustomer
  saledata2!: AdSale;  // for customer information

  


  print() {
    window.print()
  }


  id!: number;
  customerid:any =0


  salelistByid() {
    this.id = this.route.snapshot.params['postId'];

    this.saleDetailsService.getAllbyId(this.id).subscribe((data: AdSaledetails[]) => {
      this.saledetailslist = data;

      this.saledetailslist.map((a: any) => {
        // console.log(a)
        this.grandTotalsss += a.total;
      })
    })


    // console.log('total--------', this.grandTotalsss)

  }
  grandTotalsss: number = 0;


  
salesdata (){
  this.saleDetailsService.getSaleById( this.id).subscribe((data:AdSale)=>{
this.saledata2= data
this.customerid= data.customer_id

this.customerdatas();
  })
}

billtoid!: any;
billtoname!: any;
billtomobile!: any;
billtoaddress!: any;

customerdatas(){
  if(this.customerid>0){
    this.customerService.getById(this.customerid).subscribe((data:DisCustomer)=>{
this.customerdata = data;

this.billtoid= data.id
this.billtoname= data.name
this.billtomobile=data.mobile
this.billtoaddress=data.address

    })
  } else{  }
}



  date!: any;
  salependig() {                                      // method is create for get sale tabel data = ditributor_id, date , sale id , etc
    const view: String = "SalePending"

    this.saleDetailsService.getById(this.id).subscribe((res: AdSale) => {
      this.saledata = res

      if (view === this.saledata.status) {
        this.approveview = true;
      } else { this.approveview = false }
      this.date = this.saledata.date;


      this.distrubutorid = this.saledata.distributor_id;

      this.distributord()


    })
  }

  disname!: string
  disaddress!: any
  disphone!: any
  disemail!: any
  distributord() {
    this.distributorService.getById(this.distrubutorid).subscribe((data: AdDistributor) => {
      this.distributordata = data;
       this.disname = this.distributordata.name
      this.disaddress = this.distributordata.address
      this.disphone = this.distributordata.mobile

    })

  }


  getproductlist() {
    this.producService.getAll().subscribe((data: AdProduct[]) => {
      this.adproductlist = data;
    })

  }

  newstocks: number[] = []
  newstock!: number;               // new calculated stcok

  getproductbyId(productid: any, salequantity: any) {
    this.producService.getById(productid).subscribe((data: AdProduct) => {
      this.getproduct = data;
      // console.log("Product list data = ",this.getproduct.product_id, this.getproduct.product_quantity)
      const newstock: number = this.getproduct.product_quantity;
      const totalpurchase: number = this.getproduct.total_quantity;

      // console.log( "Current product quantity : ", newstock )
      // console.log( "Sale quantity : ",salequantity)

      this.newstock = newstock - salequantity;        // calculation new update stock
      this.newstocks.push(this.newstock)                // array te data push , not mandetory
      console.log(" new stock= ", this.newstock)

      this.upDateProduct(productid, this.newstock, totalpurchase)     // call for update Stock

    })
  }

  productid!: any;
  productquantity!: any;


  approved() {
    const updatestatus: string = "SaleApproved";
     this.upStatus (updatestatus)    /// Coment for test update

    this.saledetailslist.map((a: any) => {

      this.grandTotalsss += a.total;

      this.getproductbyId(a.product_id, a.quantity)


    })

  }

  response!: any;
  saveres!: any;  
  previousstock!:any;     
                                          // Distributor Stock change
  approved2() {
    this.saledetailslist.map((a: any) => {
      console.log("stock update : ", a.product_id, a.distributor_id, a.quantity, a.product_name,a.product_brand);

      this.stockService.getByPidDid(a.product_id, a.distributor_id).subscribe((data: DisStock) => {
        this.distributorStock = data
        
        if(data!==null){
          this.previousstock=data.current_quantity ;    //20/02/23
        }
         

        if (this.distributorStock !== null) {
          this.stockService.updateStock(+this.previousstock + a.quantity , a.product_id, a.distributor_id).subscribe((res: any) => {    // 20/02
            this.response = res;
          })
        } else {

          this.stockService.saveByParam(a.quantity, a.product_id, a.distributor_id, a.product_name,a.product_brand,a.product_category,a.retail_rate,a.mrp).subscribe((res: any) => {
            this.saveres = res
            console.log(" save response", this.saveres)

          })
        }


        console.log("get all data : ", this.distributorStock)
      })

      // this.stockService.updateStock(a.quantity, a.product_id, a.distributor_id).subscribe((res:any)=>{
      //   this.response=res;
      //   console.log( " stock save response" ,this.response)

      // })


    })

    // this.distributorStock{}
  }

  cancelled() {
    const updatestatus: string = "SaleCancelled";
    this.upStatus(updatestatus)
  }

  upStatus(updatedata: string) {
    this.saleDetailsService.updateStatus(this.id, updatedata).subscribe((data: any) => {
      this.ngOnInit();
    })
  }


  upDateProduct(id: number, stock: number, newtotal: number) {                       // PRODUCT LIST THEKE PRODUCT STOCK KOMBE

    // console.log("uapdate product data : " ,id, stock ,newtotal)
    this.producService.updateStock(id, stock, newtotal).subscribe((res: any) => {

    })
  }

}

// id:number, stock:number ,newtotal:number