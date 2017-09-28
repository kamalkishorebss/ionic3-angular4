import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PorderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-porder',
  templateUrl: 'porder.html',
})
export class PorderPage {
   cat: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
   this.cat="PO-Detail";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PorderPage');
  }

}
