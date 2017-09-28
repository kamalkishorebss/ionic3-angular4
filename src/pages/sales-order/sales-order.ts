import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { orderServices } from '../../services/index';
import { OrderDetailPage } from '../../pages/order-detail/order-detail';
/**
 * Generated class for the SalesOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sales-order',
  templateUrl: 'sales-order.html',
})
export class SalesOrderPage {

  Orders:any;
  comOrder:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public orderService : orderServices
    ) { 
        var completeOrder=[]; 
        this.orderService.getOrder().subscribe(result => {
         this.Orders = result;
         console.log(this.Orders);
         for(var i =0; i<this.Orders.length;i++){
               if(this.Orders[i].status == 'Complete'){
                  completeOrder.push(this.Orders[i])
               }
         }
          this.comOrder = completeOrder;     
         console.log(this.comOrder);
        });
    }
  
  orderDetail(id){
   this.navCtrl.push(OrderDetailPage,{ordId:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalesOrderPage');
  }

}
