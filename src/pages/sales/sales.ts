import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderDetailPage } from '../../pages/order-detail/order-detail';
import { orderServices } from '../../services/index';


/**
 * Generated class for the SalesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage {
  
  Orders:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public orderService : orderServices
    ) {
        this.orderService.getOrder().subscribe(result => {
         this.Orders = result;
         console.log(this.Orders);
        });
    }
  
 orderDetail(id){
   this.navCtrl.push(OrderDetailPage,{ordId:id});
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesPage');
  }

}
