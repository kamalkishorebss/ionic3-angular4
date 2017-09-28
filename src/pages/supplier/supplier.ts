import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SupplierdetailPage } from '../../pages/supplierdetail/supplierdetail';
import { SupplierServices } from '../../services/index';


/**
 * Generated class for the SupplierPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplier',
  templateUrl: 'supplier.html',
})
export class SupplierPage {
  suppliers:any;
  supName:any=[];
  background:any;
  
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public supplierServices: SupplierServices
      ) {
      var Namelist=[]; 
            this.supplierServices.getSupplier().subscribe(result => {
                 this.suppliers = result;
                 console.log(this.suppliers); 
             for(var i = 0; i<this.suppliers.length; i++){ 
                   var str = this.suppliers[i].name;
                   var num = str.split(' ')[0];
                   var tum = num.split('')[0];                   
                   var obj = this.suppliers[i];
                   obj['roundImg'] = tum;
                   Namelist.push(obj); 
                   var letters = '0123456789ABCDEF';
                     var color = '#';
                      for (var j = 0; j < 6; j++) {
                        color += letters[Math.floor(Math.random() * 16)];
                      }               
                   console.log(color);
                  obj['background'] = color;
                  Namelist.push(obj); 

             }
                            
            });
           
  } 
 
  

  Sdeatil(id){
    this.navCtrl.push(SupplierdetailPage,{supplierId:id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierPage');
   }

}
