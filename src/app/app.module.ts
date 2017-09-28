import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CustomerServices } from '../services/index';
import { ProductServices } from '../services/index';
import { SupplierServices } from '../services/index';
import { orderServices } from '../services/index';
import { ReviewServices } from '../services/index';

import { ChartsModule } from 'ng2-charts';
import 'chart.js';
import { HttpModule } from '@angular/http';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomersPage } from '../pages/customers/customers';
import { CustdetailPage } from '../pages/custdetail/custdetail';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { SalesPage } from '../pages/sales/sales';
import { SalesOrderPage } from '../pages/sales-order/sales-order';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { LoginPage } from '../pages/login/login';
import { PurchasePage } from '../pages/purchase/purchase';
import { PorderPage } from '../pages/porder/porder';
import { ReviewsPage } from '../pages/reviews/reviews';
import { RedetailPage } from '../pages/redetail/redetail';
import { SupplierPage } from '../pages/supplier/supplier';
import { SupplierdetailPage } from '../pages/supplierdetail/supplierdetail';
import { SettingPage } from '../pages/setting/setting';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    CustomersPage,
    CustdetailPage,
    ProductsPage,
    ProductPage,
    SalesPage,
    SalesOrderPage,
    OrderDetailPage,
    PurchasePage,
    PorderPage,
    ReviewsPage,
    RedetailPage,
    SupplierPage,
    SupplierdetailPage,
    SettingPage 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2FilterPipeModule,
    ChartsModule,
    Ionic2RatingModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    CustomersPage,
    CustdetailPage,
    ProductsPage,
    ProductPage,
    SalesPage,
    SalesOrderPage,
    OrderDetailPage,
    PurchasePage,
    PorderPage,
    ReviewsPage,
    RedetailPage,
    SupplierPage,
    SupplierdetailPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductServices,
    CustomerServices,
    orderServices,
    SupplierServices,
    ReviewServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
