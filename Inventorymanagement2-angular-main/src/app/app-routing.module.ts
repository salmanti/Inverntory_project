import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RegisterComponent } from './common/register/register.component';
import { TestComponent } from './common/test/test.component';
import { AdBrandComponent } from './pages/admin/ad-brand/ad-brand.component';
import { AdCategoryComponent } from './pages/admin/ad-category/ad-category.component';
import { AdCustomerComponent } from './pages/admin/ad-customer/ad-customer.component';
import { AdDashboardComponent } from './pages/admin/ad-dashboard/ad-dashboard.component';
import { AdDistributorComponent } from './pages/admin/ad-distributor/ad-distributor.component';
import { AdHomeComponent } from './pages/admin/ad-home/ad-home.component';
import { AdPaymentlistComponent } from './pages/admin/ad-paymentlist/ad-paymentlist.component';
import { AdProductStockComponent } from './pages/admin/ad-product-stock/ad-product-stock.component';
import { AdProductComponent } from './pages/admin/ad-product/ad-product.component';
import { AdReceivingComponent } from './pages/admin/ad-receiving/ad-receiving.component';
import { AdSaleinvoiceComponent } from './pages/admin/ad-saleinvoice/ad-saleinvoice.component';
import { AdSalereturnComponent } from './pages/admin/ad-salereturn/ad-salereturn.component';
import { AdSalesReportComponent } from './pages/admin/ad-sales-report/ad-sales-report.component';
import { AdSalesComponent } from './pages/admin/ad-sales/ad-sales.component';
import { AdSaleslistComponent } from './pages/admin/ad-saleslist/ad-saleslist.component';
import { AdStaffComponent } from './pages/admin/ad-staff/ad-staff.component';
import { AdStockinInvoiceComponent } from './pages/admin/ad-stockin-invoice/ad-stockin-invoice.component';
import { AdStocinComponent } from './pages/admin/ad-stockin/ad-stocin.component';
import { AdStockinpendingComponent } from './pages/admin/ad-stockinpending/ad-stockinpending.component';
import { AdSubcategoryComponent } from './pages/admin/ad-subcategory/ad-subcategory.component';
import { AdSupplierComponent } from './pages/admin/ad-supplier/ad-supplier.component';
import { AdWarehouseComponent } from './pages/admin/ad-warehouse/ad-warehouse.component';
import { AdWastagentryComponent } from './pages/admin/ad-wastagentry/ad-wastagentry.component';
import { DiProductreceivingComponent } from './pages/distributor/di-productreceiving/di-productreceiving.component';
import { DisCustomerComponent } from './pages/distributor/dis-customer/dis-customer.component';
import { DisDashboardComponent } from './pages/distributor/dis-dashboard/dis-dashboard.component';
import { DisHomeComponent } from './pages/distributor/dis-home/dis-home.component';
import { DisProductstockComponent } from './pages/distributor/dis-productstock/dis-productstock.component';
import { DisReceivedstockComponent } from './pages/distributor/dis-receivedstock/dis-receivedstock.component';
import { DisReturnstockComponent } from './pages/distributor/dis-returnstock/dis-returnstock.component';
import { DisSaleComponent } from './pages/distributor/dis-sale/dis-sale.component';
import { DisSalelistComponent } from './pages/distributor/dis-salelist/dis-salelist.component';
import { DisStockininvoiceComponent } from './pages/distributor/dis-stockininvoice/dis-stockininvoice.component';
import { WareDashboardComponent } from './pages/warehouse/ware-dashboard/ware-dashboard.component';
import { WareHomeComponent } from './pages/warehouse/ware-home/ware-home.component';
import { AdLoginreglistComponent } from './views/admin/ad-loginreglist/ad-loginreglist.component';
import { AdProducteditComponent } from './views/admin/ad-productedit/ad-productedit.component';
import { AdProductlistComponent } from './views/admin/ad-productlist/ad-productlist.component';

import { AdSingleproductviewComponent } from './views/admin/ad-singleproductview/ad-singleproductview.component';
import { ProductlistBrandComponent } from './views/admin/productlist-brand/productlist-brand.component';

const routes: Routes = [ {
  path: '',
  redirectTo:'login',
  pathMatch: 'full'
},{
  path: 'login',
  component:LoginComponent
},
{path:"register", component:RegisterComponent},
// {path:"**", component:NotFoundComponent},

// {path:'test', component:TestComponent},
// { path: 'home', component:HeaderComponent},

{ path: 'ad-home',  component: AdHomeComponent,
    children :[
              {  path:"" ,redirectTo:"ad-dashboard" , pathMatch:"full"},
              { path: 'ad-dashboard', component:AdDashboardComponent  },
              
              {path: 'ad-product',component:AdProductComponent},
              {path:'ad-supplier', component:AdSupplierComponent},
              {path:'ad-product-stock', component:AdProductStockComponent},
              {path:"ad-receiving", component:AdReceivingComponent},
              {path:"ad-sales",component:AdSalesComponent},
              {path:"ad-stockin", component:AdStocinComponent},
              {path:"ad-sales-report", component:AdSalesReportComponent},
              {path:"ad-staff" , component:AdStaffComponent},
              {path: "ad-customer", component:AdCustomerComponent},
              {path:"stockin-invoice" , component:AdStockinInvoiceComponent},
              {path:"product-list",component:AdProductlistComponent},
              {path:"ad-warehouse", component:AdWarehouseComponent},
              {path:"ad-distributor",component:AdDistributorComponent},
              {path:"ad-brand",component:AdBrandComponent},
              {path:"ad-category",component:AdCategoryComponent},
              {path:"ad-subcategory",component:AdSubcategoryComponent},
              {path:"login-reglist",component:AdLoginreglistComponent},
              {path:"productlist-brand",component:ProductlistBrandComponent},
              {path:"post/:postId/product-edit",component:AdProducteditComponent},    
              {path:"stock-pending",component:AdStockinpendingComponent},   
              {path:"ad-saleslist",component:AdSaleslistComponent}, 
              {path:"ad-paymentlist",component:AdPaymentlistComponent}, 
              {path:":postId/view",component:AdSingleproductviewComponent},
              {path:":postId/saleinvoice", component:AdSaleinvoiceComponent},
              {path:"ad-wastageentry", component:AdWastagentryComponent},
              {path:"ad-salereturn", component:AdSalereturnComponent},
             

              {path:"**", component:NotFoundComponent}
             
            ]},
 { path: 'ware-home',  component: WareHomeComponent,
     children :[
              { path: 'ware-dashboard', component:AdDashboardComponent  },
       
             
            ]},
 { path: 'dis-home',  component: DisHomeComponent,
       children :[
                     {path:"" ,redirectTo:"dis-dashboard" , pathMatch:"full"},
                      { path: 'dis-dashboard', component:DisDashboardComponent  },
                      {path:'dis-productreceiving', component:DiProductreceivingComponent},
                      {path:':postId/saleinvoice' , component:DisStockininvoiceComponent},
                      {path:'dis-received-stock', component:DisReceivedstockComponent},
                      {path:'dis-productstock', component:DisProductstockComponent},
                      {path:'dis-returnstock', component:DisReturnstockComponent},
                      {path:'dis-sale', component:DisSaleComponent},
                      {path:'dis-customer', component:DisCustomerComponent},
                      {path:'dis-salelist',component:DisSalelistComponent},


                      
                      {path:"**", component:NotFoundComponent}
                      
               
                     
                    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

