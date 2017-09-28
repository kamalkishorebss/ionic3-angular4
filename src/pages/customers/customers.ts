import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustdetailPage } from '../../pages/custdetail/custdetail';
import { CustomerServices } from '../../services/index';

/**
 * Generated class for the CustomersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customers',
  templateUrl: 'customers.html',
})
export class CustomersPage {
  find:boolean=false;
  CustomerList:any;
  customerFilter: any = { name: '' };
  constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public customerService: CustomerServices
    ) {
       this.find=true;
       
       this.customerService.getCustomer().subscribe(result => {
         this.CustomerList = result;
         console.log(this.CustomerList);
       });

  }
  
  finding(){
    this.find=!this.find;
  }

  customerdetail(id){
    //alert(id);
    this.navCtrl.push(CustdetailPage,{params1:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomersPage');
  }

}
