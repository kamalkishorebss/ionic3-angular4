import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerServices } from '../../services/index';
/**
 * Generated class for the CustdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custdetail',
  templateUrl: 'custdetail.html',
})
export class CustdetailPage {
  
  customerid:any;
  CustomerList:any;
  Customer:any;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public customerService: CustomerServices
  ) {


  }

  ionViewDidLoad() {
     this.customerid = this.navParams.get('params1');
      //console.log(this.customerid);

     this.customerService.getCustomer().subscribe(result => {
         this.CustomerList = result;
         console.log(this.CustomerList);
         for(var i =0; i<this.CustomerList.length;i++){
             if(this.CustomerList[i].id == this.customerid){
                this.CustomerList[i]
                //console.log(this.CustomerList[i]);
                this.Customer = this.CustomerList[i];
                console.log(this.Customer);
             }
         }
      });

    console.log('ionViewDidLoad CustdetailPage');
  }

}
