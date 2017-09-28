import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { orderServices } from '../../services/index';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  orderID:any;
  Orders:any;
  Items:any;
  orderDetail:any;
  shippingdetail:any;
  billingdetail:any;
  public billingDetail:boolean=false;
  public shippingDetail:boolean=false;
  public proDetail:boolean=false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService:orderServices
   ) {
      this.billingDetail=true;
      this.shippingDetail=true;
      this.proDetail=true;
      this.orderID=this.navParams.get('ordId');

      console.log(this.orderID);
      this.orderService.getOrder().subscribe(result => {
         this.Orders = result;
         for(var i=0;i<this.Orders.length;i++){
           if(this.Orders[i].id == this.orderID){
                  this.orderDetail =  this.Orders[i];
                  this.shippingdetail = this.Orders[i].billingAddress;
                  this.billingdetail = this.Orders[i].shippingAddress;
                  this.Items = this.Orders[i].items;
                  
           }
         }
        });

  }
  
  shiphide(){
    this.shippingDetail=!this.shippingDetail;
  } 
  billhide(){
    this.billingDetail=!this.billingDetail;
  } 
  phide(){
    this.proDetail=!this.proDetail;
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

}
