import { Component,ViewChild } from '@angular/core';
import { Platform,Nav,NavParams,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { HomePage } from '../pages/home/home';
import { CustomersPage } from '../pages/customers/customers';
import { ProductsPage } from '../pages/products/products';
import { SalesPage } from '../pages/sales/sales';
import { SalesOrderPage } from '../pages/sales-order/sales-order';
import { LoginPage } from '../pages/login/login';
import { PurchasePage } from '../pages/purchase/purchase';
import { ReviewsPage } from '../pages/reviews/reviews';
import { RedetailPage } from '../pages/redetail/redetail';
import { SupplierPage } from '../pages/supplier/supplier';
import { SettingPage } from '../pages/setting/setting';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  
  public showHide1:boolean=false;
  public showHide2:boolean=false;
 
  constructor(
     platform: Platform,
     statusBar: StatusBar, 
     splashScreen: SplashScreen,
     public menuCtrl: MenuController
   ) {
   this.showHide1 = true;
   this.showHide2 = true;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  salemenu(){
        this.showHide1 = !this.showHide1;
       
  }


  invtentmenu(){
     this.showHide2 = !this.showHide2;
  }


  dashboard(){
    this.nav.setRoot(HomePage)
    this.closeMenu();
  }


  customer(){
     this.nav.setRoot(CustomersPage);
     this.closeMenu();
  }
  
  product(){
     this.nav.setRoot(ProductsPage);
     this.closeMenu();

  }
  
  sales(){
     this.nav.setRoot(SalesPage);
     this.closeMenu();

  }

  salesOrder(){
     this.nav.setRoot(SalesOrderPage);
     this.closeMenu();

  }
  
  
  purchase(){
     this.nav.setRoot(PurchasePage);
     this.closeMenu();

  }
  
  reviewPage(){
     this.nav.setRoot(ReviewsPage);
     this.closeMenu();
  }

  supplierPage(){
     this.nav.setRoot(SupplierPage);
     this.closeMenu();  
  }
  
  settingPage(){
     this.nav.setRoot(SettingPage);
     this.closeMenu();  
  }

  Logout(){
    this.nav.setRoot(LoginPage);
    this.closeMenu();

  }

  closeMenu() {
   this.menuCtrl.close();
  }
}

