import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedetailPage } from '../../pages/redetail/redetail';
import { ReviewServices } from '../../services/index';

/**
 * Generated class for the ReviewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {
  
  review:any;
  Review:any;
  penReview:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public reviewServices: ReviewServices
  ) {
     this.review = 'all';
      var pending = [];
      this.reviewServices.getReview().subscribe(result => {
         this.Review  = result;
           for(var i =0;i< this.Review.length;i++){
              if(this.Review[i].status == "pending"){
                pending.push(this.Review[i]);
                this.penReview = pending;
                console.log(this.penReview);
              }
           }
         console.log(this.Review);
      });
  }

  redtailPage(id){
    this.navCtrl.push(RedetailPage,{RewId:id});
  }  
  

  onModelChange(value){
   console.log("Avaliaram em :", value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }

}
