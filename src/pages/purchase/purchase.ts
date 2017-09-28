import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PorderPage } from '../../pages/porder/porder';
/**
 * Generated class for the PurchasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html',
})
export class PurchasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  purchaseOrder(){
    this.navCtrl.push(PorderPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchasePage');
  }

}
