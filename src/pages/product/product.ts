import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductServices } from '../../services/index';

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  
  proId:any;
  ProductList:any;
  product:any;
  description:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public productServices : ProductServices
    ) {
       
       this.proId = this.navParams.get('productId');
      
     this.productServices.getProducts().subscribe(result => {
         this.ProductList = result;
         //console.log(this.CustomerList);
         for(var i =0; i<this.ProductList.length;i++){
             if(this.ProductList[i].id == this.proId){
                this.ProductList[i]
                this.product = this.ProductList[i];
                console.log(this.product);
             }
         
         
           var w=[],ds;
            w=this.ProductList[i].custom_attributes;

	         for(var k=0;k<w.length;k++){
	               if(w[k].attribute_code=="meta_description"){
	                 ds=w[k].value;
	                  this.description=ds;
	                }           
	          }
         }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
