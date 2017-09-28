import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewServices } from '../../services/index';

/**
 * Generated class for the RedetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-redetail',
  templateUrl: 'redetail.html',
})
export class RedetailPage {
  
   Review:any;
   re:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewServices : ReviewServices
  ) { 
       console.log(this.navParams.get('RewId'));
       this.reviewServices.getReview().subscribe(result => {
         this.Review  = result;
         console.log(this.Review);
         for(var i = 0;i<this.Review.length;i++){
           if(this.Review[i].id == this.navParams.get('RewId')){
             this.re  = this.Review[i];
             console.log(this.re);
           }  
         }
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedetailPage');
  }

}
