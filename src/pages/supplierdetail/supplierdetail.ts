import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SupplierServices } from '../../services/index';

/**
 * Generated class for the SupplierdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplierdetail',
  templateUrl: 'supplierdetail.html',
})
export class SupplierdetailPage {
  
  suppliers:any;
  supplier:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public supplierServices: SupplierServices
  ){
     this.supplierServices.getSupplier().subscribe(result => {
                 this.suppliers = result;
                 console.log(this.suppliers); 
             for(var i = 0; i<this.suppliers.length; i++){
               if(this.suppliers[i].id == this.navParams.get('supplierId')){
                  this.supplier  = this.suppliers[i];
                  console.log(this.supplier);
               }
             }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierdetailPage');
  }


}