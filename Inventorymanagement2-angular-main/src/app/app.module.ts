import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './common/test/test.component';

import { AdDashboardComponent } from './pages/admin/ad-dashboard/ad-dashboard.component';
import { AdHomeComponent } from './pages/admin/ad-home/ad-home.component';
import { AdProductComponent } from './pages/admin/ad-product/ad-product.component';
import { AdSupplierComponent } from './pages/admin/ad-supplier/ad-supplier.component';
import { AdCustomerComponent } from './pages/admin/ad-customer/ad-customer.component';
import { WareHomeComponent } from './pages/warehouse/ware-home/ware-home.component';
import { WareDashboardComponent } from './pages/warehouse/ware-dashboard/ware-dashboard.component';
import { DisHomeComponent } from './pages/distributor/dis-home/dis-home.component';
import { DisDashboardComponent } from './pages/distributor/dis-dashboard/dis-dashboard.component';
import { AdProductStockComponent } from './pages/admin/ad-product-stock/ad-product-stock.component';
import { AdReceivingComponent } from './pages/admin/ad-receiving/ad-receiving.component';
import { AdSalesComponent } from './pages/admin/ad-sales/ad-sales.component';
import { AdStocinComponent } from './pages/admin/ad-stockin/ad-stocin.component';
import { AdSalesReportComponent } from './pages/admin/ad-sales-report/ad-sales-report.component';
import { AdStaffComponent } from './pages/admin/ad-staff/ad-staff.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { AdProductlistComponent } from './views/admin/ad-productlist/ad-productlist.component';
import { RegisterComponent } from './common/register/register.component';
import { AdStockinInvoiceComponent } from './pages/admin/ad-stockin-invoice/ad-stockin-invoice.component';
import { AdWarehouseComponent } from './pages/admin/ad-warehouse/ad-warehouse.component';
import { AdDistributorComponent } from './pages/admin/ad-distributor/ad-distributor.component';
import { AdCategoryComponent } from './pages/admin/ad-category/ad-category.component';
import { AdSubcategoryComponent } from './pages/admin/ad-subcategory/ad-subcategory.component';
import { AdBrandComponent } from './pages/admin/ad-brand/ad-brand.component';
import { AdLoginreglistComponent } from './views/admin/ad-loginreglist/ad-loginreglist.component';
import { ProductlistBrandComponent } from './views/admin/productlist-brand/productlist-brand.component';
import { AdProducteditComponent } from './views/admin/ad-productedit/ad-productedit.component';
import { AdStockinpendingComponent } from './pages/admin/ad-stockinpending/ad-stockinpending.component';
import { AdSaleslistComponent } from './pages/admin/ad-saleslist/ad-saleslist.component';
import { AdPaymentlistComponent } from './pages/admin/ad-paymentlist/ad-paymentlist.component';
import { Login2Component } from './common/login2/login2.component';
import { AdSingleproductviewComponent } from './views/admin/ad-singleproductview/ad-singleproductview.component';
import { AdSaleinvoiceComponent } from './pages/admin/ad-saleinvoice/ad-saleinvoice.component';
import { DiProductreceivingComponent } from './pages/distributor/di-productreceiving/di-productreceiving.component';
import { DisStockininvoiceComponent } from './pages/distributor/dis-stockininvoice/dis-stockininvoice.component';
import { DisReceivedstockComponent } from './pages/distributor/dis-receivedstock/dis-receivedstock.component';
import { AdWastagentryComponent } from './pages/admin/ad-wastagentry/ad-wastagentry.component';
import { DisProductstockComponent } from './pages/distributor/dis-productstock/dis-productstock.component';
import { DisReturnstockComponent } from './pages/distributor/dis-returnstock/dis-returnstock.component';
import { DisSaleComponent } from './pages/distributor/dis-sale/dis-sale.component';
import { AdSalereturnComponent } from './pages/admin/ad-salereturn/ad-salereturn.component';
import { DisCustomerComponent } from './pages/distributor/dis-customer/dis-customer.component';
import { DisSalelistComponent } from './pages/distributor/dis-salelist/dis-salelist.component';



 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TestComponent,
  
    AdDashboardComponent,
    AdHomeComponent,
    AdProductComponent,
    AdSupplierComponent,
    AdCustomerComponent,
    WareHomeComponent,
    WareDashboardComponent,
    DisHomeComponent,
    DisDashboardComponent,
    AdProductStockComponent,
    AdReceivingComponent,
    AdSalesComponent,
    AdStocinComponent,
    AdSalesReportComponent,
    AdStaffComponent,
    NotFoundComponent,
    AdProductlistComponent,
    RegisterComponent,
    AdStockinInvoiceComponent,
    AdWarehouseComponent,
    AdDistributorComponent,
    AdCategoryComponent,
    AdSubcategoryComponent,
    AdBrandComponent,
    AdLoginreglistComponent,
    ProductlistBrandComponent,
    AdProducteditComponent,
    AdStockinpendingComponent,
    AdSaleslistComponent,
    AdPaymentlistComponent,
    Login2Component,
    AdSingleproductviewComponent,
    AdSaleinvoiceComponent,
    DiProductreceivingComponent,
    DisStockininvoiceComponent,
    DisReceivedstockComponent,
    AdWastagentryComponent,
    DisProductstockComponent,
    DisReturnstockComponent,
    DisSaleComponent,
    AdSalereturnComponent,
    DisCustomerComponent,
    DisSalelistComponent,
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
