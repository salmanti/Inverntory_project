import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdBrand } from 'src/app/model/admin/ad-brand.model';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { AdProduct } from 'src/app/model/admin/ad-product.model';
import { AdPurchase } from 'src/app/model/admin/ad-purchase.model';
import { AdSaledetails } from 'src/app/model/admin/ad-saledetails.model';
import { AdSale } from 'src/app/model/admin/ad-sales.model';
import { AdSupplier } from 'src/app/model/admin/ad-supplier.model';
import { AdWarehouse } from 'src/app/model/admin/ad-warehouse.model';
import { AdDistributorService } from 'src/app/service/admin/ad-distributor.service';
import { AdProductService } from 'src/app/service/admin/ad-product.service';
import { AdSalesService } from 'src/app/service/admin/ad-sales.service';
import { AdStockinService } from 'src/app/service/admin/ad-stockin.service';
import { AdSupplierService } from 'src/app/service/admin/ad-supplier.service';
import { AdWarehouseService } from 'src/app/service/admin/ad-warehouse.service';
import { BrandService } from 'src/app/service/admin/brand.service';

@Component({
  selector: 'app-ad-sales',
  templateUrl: './ad-sales.component.html',
  styleUrls: ['./ad-sales.component.css']
})
export class AdSalesComponent implements OnInit {
  id!: number;
  post!: AdProduct;
  posts: AdProduct[] = [];
  productList: AdPurchase[] = [];  //  array of purchase
  product!: AdPurchase;

  brnads !: AdBrand[];

  productslist3!: AdProduct[];   // products data
  warehouselist3!: AdWarehouse[];   // warehouse data
  distributorlist!: AdDistributor[];  // distributor data 
  saledetailsList: AdSaledetails[] = []  // sale details array
  saledetaisd!: AdSaledetails;

  salelist: AdSale[] = [];
  saledatas!: AdSale;

  brname: String = "";

  price: number = 1;
  quantity!: number;
  total!: number;
  date!: string;

  addForm!: FormGroup;
  post2!: AdProduct;

  createform: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    public productService: AdProductService,
    public supplierService: AdSupplierService,
    private route: ActivatedRoute,
    private brandService: BrandService,
    private stockinService: AdStockinService,
    private warehouseService: AdWarehouseService,
    private distributorService: AdDistributorService,
    private saleService: AdSalesService,

    private router: Router
  ) { }
  ngOnInit(): void {
    this.nextVal()
    this.productlist()

    this.getallBrands()
    this.warehouselist()
    this.distributorlists()

    // this.addForm=this.formBuilder.group({})

    this.addForm = this.formBuilder.group({
      id: [],
      brand_name: [''],
      product_id: [''],
      product_name: [''],
      product_unit: [''],
      product_price: [0],
      product_quantity: [0],
      supplier_name: [''],
      payment_method: [''],
      date: [''],
      amount: [0],
      status: [0],
      stock: [0]

    })
  }




  statusdata: string = "SalePending"

  salesid!: any;



  salesid2!: any;
  add2() {                                                               // Sale_details data
    this.saleService.saveAll(this.saledetailsList).subscribe(res => {

      const url = '/ad-home/' + this.nextValue + '/saleinvoice'
      console.log('URL', url)

      this.router.navigateByUrl(url);

    })

  }



  show() { this.createform = true }
  hide() { this.createform = false }

  calculateResult() {
    this.total = this.price * this.quantity;
    // console.log("total :" +  this.price + "  "+this.quantity)

  }



  AddtoCard() {                    // Add sale_Details to array 
    this.saledetaisd = {

      // private long sale_id;

      product_id: this.productid,
      unit_price: this.purchaeprice,

      quantity: this.quantity,
      total: this.total,
      sale_id: this.nextValue,
      product_name: this.pname,
      product_brand: this.abc3,
      distributor_id: this.dillerid,
      product_category: this.product_cat,
      retail_rate: this.retail_rate,
      mrp: this.mrp

    }
    console.log('sales details : ', this.saledetaisd)
    this.saledetailsList.push(this.saledetaisd);          // push into sales details array 

    this.addForm = this.formBuilder.group({


      product_id: [''],
      product_name: [''],
      product_unit: [''],
      product_price: [0],
      product_quantity: [0],
      amount: [0],
      total:[0],
      stock: [0],
      product_category:[''],
      retail_rate:[0],
      mrp:[0]

    })
    this.quantity=0;     // for previous ng model quantiy = 0      
   this.  getTotalPrice()

  }

  saleids!: any;

  addsalesdata() {                    //Sale Data
    this.saledatas = {
      date: this.date,
      grand_total: this.grandTotalsss,
      distributor_id: this.dillerid,
      status: this.statusdata
      // warehouse_id: ,
      // customer_id :,
      // sale_details_id :
    }

    this.saleService.saveSale(this.saledatas).subscribe(res => {
      this.add2();            //sale Details data
    })
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


  removeItem(item: any) {
    const indexvalue: number = parseInt(item);

    // console.log("index of array = " +indexvalue)
    this.saledetailsList.splice(indexvalue, 1);

    this.getTotalPrice()

  }



  warehouselist() {
    this.warehouseService.getAll().subscribe((data: AdWarehouse[]) => {
      this.warehouselist3 = data;
    })

  }
  distributorlists() {
    this.distributorService.getAll().subscribe((data: AdDistributor[]) => {
      this.distributorlist = data;
    })
  }

  dillerid!: number;

  dilleridevent(event: any) {
    this.dillerid = event.target.value;
    // console.log('diller id =', this.dillerid)
  }

  nextValue!: number;



  nextVal() {
    this.productService.findNextValue().subscribe((data: any) => {
      this.nextValue = data
      //  console.log("This is the next Value : " + this.nextValue )

    });

  }


  productlist() {

    this.productService.getAll().subscribe((data: AdProduct[]) => {
      this.posts = data;
      // console.log(this.posts);
    })

  }


  getallBrands() {
    this.brandService.getAll().subscribe((data: AdBrand[]) => {
      this.brnads = data;
    });
  }




  selectbrand: String = "";


  productsfrombrand(event: any) {
    this.selectbrand = event.target.value;
    // console.log("brand name : " + this.selectbrand )
    this.productService.getByBrand(this.selectbrand).subscribe((data: AdProduct[]) => {
      this.productslist3 = data;


    })

  }


  editEmp(product: AdProduct): void {

    localStorage.removeItem('proId');
    // let proid = 0;
    localStorage.setItem('proId', product.product_id.toString());
    let proid: any = localStorage.getItem('proId');
    if (+proid > 0) {
      this.productService.getById(+proid).subscribe(
        data => { this.addForm.patchValue(data); }
      )

    }

  }

  productdatamethod(product: AdProduct): void {
    // this.productService.find(product.id);
    this.productService.find(product.product_id).subscribe((data: AdProduct) => {
      this.post2 = data;
    });
  }


  supplierdatamethod(): void {

  }
  selectedPost!: number;

  post4!: AdProduct;



  pname: string = '';
  abc2: string = '';
  abc3: string = '';
  totalstcok!: number;
  purchaeprice!: number;
  productid!: number;

  retail_rate!: number;   //for distributor use
  mrp!: number;         ////for distributor use
  product_cat: string='';


  abcd(event: any) {
    this.selectedPost = event.target.value;
    console.log("Product Added" + this.selectedPost);

    this.productService.find(this.selectedPost).subscribe((data: AdProduct) => {
      this.post4 = data;
      this.pname = this.post4.product_name;
      this.abc2 = this.post4.product_unit;
      this.abc3 = this.post4.product_brand;
      this.totalstcok = this.post4.product_quantity;
      this.purchaeprice = this.post4.purchase_rate;
      this.price = this.post4.purchase_rate;
      this.productid = this.post4.product_id;
      this.retail_rate = this.post4.retail_rate;
      this.mrp = this.post4.mrp;
      this.product_cat = this.post4.product_category;
      // console.log(this.posts);
      // this.calculateResult()
    })


  }


}
