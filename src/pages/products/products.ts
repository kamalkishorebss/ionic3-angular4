import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../../pages/product/product';
import { ProductServices } from '../../services/index';


/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

find:boolean=false;
ProductList:any;
productFilter:any = {'name':''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productServices : ProductServices
  ) {
     
     this.find=true;
     this.productServices.getProducts().subscribe(result => {
         this.ProductList = result;
         console.log(this.ProductList);
     });
  }
  
  productDetail(id){
    this.navCtrl.push(ProductPage,{productId:id});
  }

  finding(){
   this.find=!this.find;

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

}
